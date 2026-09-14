import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PromotionsRepository } from './promotions.repository';
import { ProductsRepository } from '../products/products.repository';
import type { CreatePromotionDto } from './dto/create-promotion.dto';
import type { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsService {
  constructor(
    private readonly repository: PromotionsRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  private async assertProductsExist(productIds: string[]) {
    const uniqueIds = [...new Set(productIds)];
    const products = await this.productsRepository.findManyByIds(uniqueIds);
    const foundIds = new Set(products.map((p) => p.id));
    const missing = uniqueIds.filter((id) => !foundIds.has(id));
    if (missing.length) {
      throw new BadRequestException(
        `Product(s) not found: ${missing.join(', ')}`,
      );
    }
  }

  private toResponse(promotion: any) {
    return {
      id: promotion.id,
      name: promotion.name,
      price: promotion.price,
      active: promotion.active,
      items: promotion.items?.map((item: any) => ({
        productId: item.productId,
        quantity: item.quantity,
        product: item.product
          ? {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
              stock: item.product.stock,
            }
          : undefined,
      })),
    };
  }

  async findAll(active?: boolean) {
    const where = active === undefined ? {} : { active };
    const promotions = await this.repository.findAll(where);
    return promotions.map((p) => this.toResponse(p));
  }

  async findOne(id: string) {
    const promotion = await this.repository.findById(id);
    if (!promotion) {
      throw new NotFoundException(`Promotion ${id} not found`);
    }
    return this.toResponse(promotion);
  }

  async create(data: CreatePromotionDto) {
    await this.assertProductsExist(data.items.map((item) => item.productId));
    const promotion = await this.repository.create(data);
    return this.toResponse(promotion);
  }

  async update(id: string, data: UpdatePromotionDto) {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Promotion ${id} not found`);
    }
    if (data.items) {
      await this.assertProductsExist(data.items.map((item) => item.productId));
    }
    const promotion = await this.repository.update(id, data);
    return this.toResponse(promotion);
  }

  async remove(id: string) {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new NotFoundException(`Promotion ${id} not found`);
    }
    await this.repository.setActive(id, false);
  }
}
