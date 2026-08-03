import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductoModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductoPayload>;
export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type ProductoAvgAggregateOutputType = {
    precio: number | null;
    stock: number | null;
};
export type ProductoSumAggregateOutputType = {
    precio: number | null;
    stock: number | null;
};
export type ProductoMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    precio: number | null;
    stock: number | null;
    categoria: string | null;
    tamano: string | null;
    unidad: string | null;
    activo: boolean | null;
    codigo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    precio: number | null;
    stock: number | null;
    categoria: string | null;
    tamano: string | null;
    unidad: string | null;
    activo: boolean | null;
    codigo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoCountAggregateOutputType = {
    id: number;
    nombre: number;
    precio: number;
    stock: number;
    categoria: number;
    tamano: number;
    unidad: number;
    activo: number;
    codigo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductoAvgAggregateInputType = {
    precio?: true;
    stock?: true;
};
export type ProductoSumAggregateInputType = {
    precio?: true;
    stock?: true;
};
export type ProductoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    precio?: true;
    stock?: true;
    categoria?: true;
    tamano?: true;
    unidad?: true;
    activo?: true;
    codigo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    precio?: true;
    stock?: true;
    categoria?: true;
    tamano?: true;
    unidad?: true;
    activo?: true;
    codigo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    precio?: true;
    stock?: true;
    categoria?: true;
    tamano?: true;
    unidad?: true;
    activo?: true;
    codigo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductoCountAggregateInputType;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducto[P]> : Prisma.GetScalarType<T[P], AggregateProducto[P]>;
};
export type ProductoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithAggregationInput | Prisma.ProductoOrderByWithAggregationInput[];
    by: Prisma.ProductoScalarFieldEnum[] | Prisma.ProductoScalarFieldEnum;
    having?: Prisma.ProductoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoCountAggregateInputType | true;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type ProductoGroupByOutputType = {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo: boolean;
    codigo: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]>;
}>>;
export type ProductoWhereInput = {
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    id?: Prisma.StringFilter<"Producto"> | string;
    nombre?: Prisma.StringFilter<"Producto"> | string;
    precio?: Prisma.FloatFilter<"Producto"> | number;
    stock?: Prisma.IntFilter<"Producto"> | number;
    categoria?: Prisma.StringFilter<"Producto"> | string;
    tamano?: Prisma.StringFilter<"Producto"> | string;
    unidad?: Prisma.StringFilter<"Producto"> | string;
    activo?: Prisma.BoolFilter<"Producto"> | boolean;
    codigo?: Prisma.StringNullableFilter<"Producto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    items?: Prisma.ItemVentaListRelationFilter;
};
export type ProductoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tamano?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    codigo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    items?: Prisma.ItemVentaOrderByRelationAggregateInput;
};
export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigo?: string;
    AND?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    OR?: Prisma.ProductoWhereInput[];
    NOT?: Prisma.ProductoWhereInput | Prisma.ProductoWhereInput[];
    nombre?: Prisma.StringFilter<"Producto"> | string;
    precio?: Prisma.FloatFilter<"Producto"> | number;
    stock?: Prisma.IntFilter<"Producto"> | number;
    categoria?: Prisma.StringFilter<"Producto"> | string;
    tamano?: Prisma.StringFilter<"Producto"> | string;
    unidad?: Prisma.StringFilter<"Producto"> | string;
    activo?: Prisma.BoolFilter<"Producto"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Producto"> | Date | string;
    items?: Prisma.ItemVentaListRelationFilter;
}, "id" | "codigo">;
export type ProductoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tamano?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    codigo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductoCountOrderByAggregateInput;
    _avg?: Prisma.ProductoAvgOrderByAggregateInput;
    _max?: Prisma.ProductoMaxOrderByAggregateInput;
    _min?: Prisma.ProductoMinOrderByAggregateInput;
    _sum?: Prisma.ProductoSumOrderByAggregateInput;
};
export type ProductoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductoScalarWhereWithAggregatesInput | Prisma.ProductoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    precio?: Prisma.FloatWithAggregatesFilter<"Producto"> | number;
    stock?: Prisma.IntWithAggregatesFilter<"Producto"> | number;
    categoria?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    tamano?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    unidad?: Prisma.StringWithAggregatesFilter<"Producto"> | string;
    activo?: Prisma.BoolWithAggregatesFilter<"Producto"> | boolean;
    codigo?: Prisma.StringNullableWithAggregatesFilter<"Producto"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Producto"> | Date | string;
};
export type ProductoCreateInput = {
    id?: string;
    nombre: string;
    precio: number;
    stock?: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo?: boolean;
    codigo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ItemVentaCreateNestedManyWithoutProductoInput;
};
export type ProductoUncheckedCreateInput = {
    id?: string;
    nombre: string;
    precio: number;
    stock?: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo?: boolean;
    codigo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ItemVentaUncheckedCreateNestedManyWithoutProductoInput;
};
export type ProductoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemVentaUpdateManyWithoutProductoNestedInput;
};
export type ProductoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemVentaUncheckedUpdateManyWithoutProductoNestedInput;
};
export type ProductoCreateManyInput = {
    id?: string;
    nombre: string;
    precio: number;
    stock?: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo?: boolean;
    codigo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tamano?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoAvgOrderByAggregateInput = {
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tamano?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    tamano?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductoSumOrderByAggregateInput = {
    precio?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductoScalarRelationFilter = {
    is?: Prisma.ProductoWhereInput;
    isNot?: Prisma.ProductoWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ProductoCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutItemsInput, Prisma.ProductoUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductoCreateWithoutItemsInput, Prisma.ProductoUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ProductoCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ProductoUpsertWithoutItemsInput;
    connect?: Prisma.ProductoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductoUpdateToOneWithWhereWithoutItemsInput, Prisma.ProductoUpdateWithoutItemsInput>, Prisma.ProductoUncheckedUpdateWithoutItemsInput>;
};
export type ProductoCreateWithoutItemsInput = {
    id?: string;
    nombre: string;
    precio: number;
    stock?: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo?: boolean;
    codigo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductoUncheckedCreateWithoutItemsInput = {
    id?: string;
    nombre: string;
    precio: number;
    stock?: number;
    categoria: string;
    tamano: string;
    unidad: string;
    activo?: boolean;
    codigo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductoCreateOrConnectWithoutItemsInput = {
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutItemsInput, Prisma.ProductoUncheckedCreateWithoutItemsInput>;
};
export type ProductoUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ProductoUpdateWithoutItemsInput, Prisma.ProductoUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ProductoCreateWithoutItemsInput, Prisma.ProductoUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ProductoWhereInput;
};
export type ProductoUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ProductoWhereInput;
    data: Prisma.XOR<Prisma.ProductoUpdateWithoutItemsInput, Prisma.ProductoUncheckedUpdateWithoutItemsInput>;
};
export type ProductoUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoCountOutputType = {
    items: number;
};
export type ProductoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | ProductoCountOutputTypeCountItemsArgs;
};
export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductoCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemVentaWhereInput;
};
export type ProductoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    precio?: boolean;
    stock?: boolean;
    categoria?: boolean;
    tamano?: boolean;
    unidad?: boolean;
    activo?: boolean;
    codigo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    items?: boolean | Prisma.Producto$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    precio?: boolean;
    stock?: boolean;
    categoria?: boolean;
    tamano?: boolean;
    unidad?: boolean;
    activo?: boolean;
    codigo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    precio?: boolean;
    stock?: boolean;
    categoria?: boolean;
    tamano?: boolean;
    unidad?: boolean;
    activo?: boolean;
    codigo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type ProductoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    precio?: boolean;
    stock?: boolean;
    categoria?: boolean;
    tamano?: boolean;
    unidad?: boolean;
    activo?: boolean;
    codigo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "precio" | "stock" | "categoria" | "tamano" | "unidad" | "activo" | "codigo" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>;
export type ProductoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | Prisma.Producto$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Producto";
    objects: {
        items: Prisma.$ItemVentaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        precio: number;
        stock: number;
        categoria: string;
        tamano: string;
        unidad: string;
        activo: boolean;
        codigo: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["producto"]>;
    composites: {};
};
export type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductoPayload, S>;
export type ProductoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoCountAggregateInputType | true;
};
export interface ProductoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Producto'];
        meta: {
            name: 'Producto';
        };
    };
    findUnique<T extends ProductoFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductoFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductoFindManyArgs>(args?: Prisma.SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductoCreateArgs>(args: Prisma.SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductoCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductoDeleteArgs>(args: Prisma.SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductoUpdateArgs>(args: Prisma.SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductoUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductoUpsertArgs>(args: Prisma.SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductoCountArgs>(args?: Prisma.Subset<T, ProductoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoCountAggregateOutputType> : number>;
    aggregate<T extends ProductoAggregateArgs>(args: Prisma.Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>;
    groupBy<T extends ProductoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductoGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductoFieldRefs;
}
export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    items<T extends Prisma.Producto$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Producto$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductoFieldRefs {
    readonly id: Prisma.FieldRef<"Producto", 'String'>;
    readonly nombre: Prisma.FieldRef<"Producto", 'String'>;
    readonly precio: Prisma.FieldRef<"Producto", 'Float'>;
    readonly stock: Prisma.FieldRef<"Producto", 'Int'>;
    readonly categoria: Prisma.FieldRef<"Producto", 'String'>;
    readonly tamano: Prisma.FieldRef<"Producto", 'String'>;
    readonly unidad: Prisma.FieldRef<"Producto", 'String'>;
    readonly activo: Prisma.FieldRef<"Producto", 'Boolean'>;
    readonly codigo: Prisma.FieldRef<"Producto", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Producto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Producto", 'DateTime'>;
}
export type ProductoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
    orderBy?: Prisma.ProductoOrderByWithRelationInput | Prisma.ProductoOrderByWithRelationInput[];
    cursor?: Prisma.ProductoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type ProductoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
};
export type ProductoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.ProductoCreateManyInput | Prisma.ProductoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type ProductoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductoUpdateManyMutationInput, Prisma.ProductoUncheckedUpdateManyInput>;
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type ProductoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductoCreateInput, Prisma.ProductoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductoUpdateInput, Prisma.ProductoUncheckedUpdateInput>;
};
export type ProductoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where: Prisma.ProductoWhereUniqueInput;
};
export type ProductoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductoWhereInput;
    limit?: number;
};
export type Producto$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    where?: Prisma.ItemVentaWhereInput;
    orderBy?: Prisma.ItemVentaOrderByWithRelationInput | Prisma.ItemVentaOrderByWithRelationInput[];
    cursor?: Prisma.ItemVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemVentaScalarFieldEnum | Prisma.ItemVentaScalarFieldEnum[];
};
export type ProductoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    include?: Prisma.ProductoInclude<ExtArgs> | null;
};
