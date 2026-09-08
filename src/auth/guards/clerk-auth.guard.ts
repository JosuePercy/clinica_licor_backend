import {
  Injectable,
  UnauthorizedException,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { verifyToken } from '@clerk/backend';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { Role } from '../role.enum';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request.headers.authorization);

    if (!token) {
      throw new UnauthorizedException('Missing bearer token');
    }

    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
      throw new UnauthorizedException('CLERK_SECRET_KEY is not configured on the server');
    }

    const { data, errors } = await verifyToken(token, { secretKey });

    if (errors || !data) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    const payload = data as Record<string, unknown>;
    const role = payload.role;
    if (role !== Role.ADMIN && role !== Role.SELLER) {
      throw new UnauthorizedException(
        'Token is missing a valid "role" claim — check the session token customization in the Clerk dashboard',
      );
    }

    request.user = { id: payload.sub as string, role: role as Role };
    return true;
  }

  private extractToken(authorizationHeader?: string): string | undefined {
    const [type, token] = authorizationHeader?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
