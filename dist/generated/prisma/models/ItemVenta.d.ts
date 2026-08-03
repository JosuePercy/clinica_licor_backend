import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ItemVentaModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemVentaPayload>;
export type AggregateItemVenta = {
    _count: ItemVentaCountAggregateOutputType | null;
    _avg: ItemVentaAvgAggregateOutputType | null;
    _sum: ItemVentaSumAggregateOutputType | null;
    _min: ItemVentaMinAggregateOutputType | null;
    _max: ItemVentaMaxAggregateOutputType | null;
};
export type ItemVentaAvgAggregateOutputType = {
    cantidad: number | null;
    precioUnitario: number | null;
    subtotal: number | null;
};
export type ItemVentaSumAggregateOutputType = {
    cantidad: number | null;
    precioUnitario: number | null;
    subtotal: number | null;
};
export type ItemVentaMinAggregateOutputType = {
    id: string | null;
    productoId: string | null;
    transaccionId: string | null;
    cantidad: number | null;
    precioUnitario: number | null;
    subtotal: number | null;
};
export type ItemVentaMaxAggregateOutputType = {
    id: string | null;
    productoId: string | null;
    transaccionId: string | null;
    cantidad: number | null;
    precioUnitario: number | null;
    subtotal: number | null;
};
export type ItemVentaCountAggregateOutputType = {
    id: number;
    productoId: number;
    transaccionId: number;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    _all: number;
};
export type ItemVentaAvgAggregateInputType = {
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type ItemVentaSumAggregateInputType = {
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type ItemVentaMinAggregateInputType = {
    id?: true;
    productoId?: true;
    transaccionId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type ItemVentaMaxAggregateInputType = {
    id?: true;
    productoId?: true;
    transaccionId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type ItemVentaCountAggregateInputType = {
    id?: true;
    productoId?: true;
    transaccionId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
    _all?: true;
};
export type ItemVentaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemVentaWhereInput;
    orderBy?: Prisma.ItemVentaOrderByWithRelationInput | Prisma.ItemVentaOrderByWithRelationInput[];
    cursor?: Prisma.ItemVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemVentaCountAggregateInputType;
    _avg?: ItemVentaAvgAggregateInputType;
    _sum?: ItemVentaSumAggregateInputType;
    _min?: ItemVentaMinAggregateInputType;
    _max?: ItemVentaMaxAggregateInputType;
};
export type GetItemVentaAggregateType<T extends ItemVentaAggregateArgs> = {
    [P in keyof T & keyof AggregateItemVenta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItemVenta[P]> : Prisma.GetScalarType<T[P], AggregateItemVenta[P]>;
};
export type ItemVentaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemVentaWhereInput;
    orderBy?: Prisma.ItemVentaOrderByWithAggregationInput | Prisma.ItemVentaOrderByWithAggregationInput[];
    by: Prisma.ItemVentaScalarFieldEnum[] | Prisma.ItemVentaScalarFieldEnum;
    having?: Prisma.ItemVentaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemVentaCountAggregateInputType | true;
    _avg?: ItemVentaAvgAggregateInputType;
    _sum?: ItemVentaSumAggregateInputType;
    _min?: ItemVentaMinAggregateInputType;
    _max?: ItemVentaMaxAggregateInputType;
};
export type ItemVentaGroupByOutputType = {
    id: string;
    productoId: string;
    transaccionId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    _count: ItemVentaCountAggregateOutputType | null;
    _avg: ItemVentaAvgAggregateOutputType | null;
    _sum: ItemVentaSumAggregateOutputType | null;
    _min: ItemVentaMinAggregateOutputType | null;
    _max: ItemVentaMaxAggregateOutputType | null;
};
export type GetItemVentaGroupByPayload<T extends ItemVentaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemVentaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemVentaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemVentaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemVentaGroupByOutputType[P]>;
}>>;
export type ItemVentaWhereInput = {
    AND?: Prisma.ItemVentaWhereInput | Prisma.ItemVentaWhereInput[];
    OR?: Prisma.ItemVentaWhereInput[];
    NOT?: Prisma.ItemVentaWhereInput | Prisma.ItemVentaWhereInput[];
    id?: Prisma.StringFilter<"ItemVenta"> | string;
    productoId?: Prisma.StringFilter<"ItemVenta"> | string;
    transaccionId?: Prisma.StringFilter<"ItemVenta"> | string;
    cantidad?: Prisma.IntFilter<"ItemVenta"> | number;
    precioUnitario?: Prisma.FloatFilter<"ItemVenta"> | number;
    subtotal?: Prisma.FloatFilter<"ItemVenta"> | number;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    transaccion?: Prisma.XOR<Prisma.TransaccionScalarRelationFilter, Prisma.TransaccionWhereInput>;
};
export type ItemVentaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    transaccionId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    transaccion?: Prisma.TransaccionOrderByWithRelationInput;
};
export type ItemVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ItemVentaWhereInput | Prisma.ItemVentaWhereInput[];
    OR?: Prisma.ItemVentaWhereInput[];
    NOT?: Prisma.ItemVentaWhereInput | Prisma.ItemVentaWhereInput[];
    productoId?: Prisma.StringFilter<"ItemVenta"> | string;
    transaccionId?: Prisma.StringFilter<"ItemVenta"> | string;
    cantidad?: Prisma.IntFilter<"ItemVenta"> | number;
    precioUnitario?: Prisma.FloatFilter<"ItemVenta"> | number;
    subtotal?: Prisma.FloatFilter<"ItemVenta"> | number;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.ProductoWhereInput>;
    transaccion?: Prisma.XOR<Prisma.TransaccionScalarRelationFilter, Prisma.TransaccionWhereInput>;
}, "id">;
export type ItemVentaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    transaccionId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    _count?: Prisma.ItemVentaCountOrderByAggregateInput;
    _avg?: Prisma.ItemVentaAvgOrderByAggregateInput;
    _max?: Prisma.ItemVentaMaxOrderByAggregateInput;
    _min?: Prisma.ItemVentaMinOrderByAggregateInput;
    _sum?: Prisma.ItemVentaSumOrderByAggregateInput;
};
export type ItemVentaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemVentaScalarWhereWithAggregatesInput | Prisma.ItemVentaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemVentaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemVentaScalarWhereWithAggregatesInput | Prisma.ItemVentaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ItemVenta"> | string;
    productoId?: Prisma.StringWithAggregatesFilter<"ItemVenta"> | string;
    transaccionId?: Prisma.StringWithAggregatesFilter<"ItemVenta"> | string;
    cantidad?: Prisma.IntWithAggregatesFilter<"ItemVenta"> | number;
    precioUnitario?: Prisma.FloatWithAggregatesFilter<"ItemVenta"> | number;
    subtotal?: Prisma.FloatWithAggregatesFilter<"ItemVenta"> | number;
};
export type ItemVentaCreateInput = {
    id?: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    producto: Prisma.ProductoCreateNestedOneWithoutItemsInput;
    transaccion: Prisma.TransaccionCreateNestedOneWithoutItemsInput;
};
export type ItemVentaUncheckedCreateInput = {
    id?: string;
    productoId: string;
    transaccionId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutItemsNestedInput;
    transaccion?: Prisma.TransaccionUpdateOneRequiredWithoutItemsNestedInput;
};
export type ItemVentaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.StringFieldUpdateOperationsInput | string;
    transaccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaCreateManyInput = {
    id?: string;
    productoId: string;
    transaccionId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.StringFieldUpdateOperationsInput | string;
    transaccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaListRelationFilter = {
    every?: Prisma.ItemVentaWhereInput;
    some?: Prisma.ItemVentaWhereInput;
    none?: Prisma.ItemVentaWhereInput;
};
export type ItemVentaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItemVentaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    transaccionId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type ItemVentaAvgOrderByAggregateInput = {
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type ItemVentaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    transaccionId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type ItemVentaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    transaccionId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type ItemVentaSumOrderByAggregateInput = {
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type ItemVentaCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput> | Prisma.ItemVentaCreateWithoutProductoInput[] | Prisma.ItemVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutProductoInput | Prisma.ItemVentaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ItemVentaCreateManyProductoInputEnvelope;
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
};
export type ItemVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput> | Prisma.ItemVentaCreateWithoutProductoInput[] | Prisma.ItemVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutProductoInput | Prisma.ItemVentaCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.ItemVentaCreateManyProductoInputEnvelope;
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
};
export type ItemVentaUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput> | Prisma.ItemVentaCreateWithoutProductoInput[] | Prisma.ItemVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutProductoInput | Prisma.ItemVentaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ItemVentaUpsertWithWhereUniqueWithoutProductoInput | Prisma.ItemVentaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ItemVentaCreateManyProductoInputEnvelope;
    set?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    disconnect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    delete?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    update?: Prisma.ItemVentaUpdateWithWhereUniqueWithoutProductoInput | Prisma.ItemVentaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ItemVentaUpdateManyWithWhereWithoutProductoInput | Prisma.ItemVentaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
};
export type ItemVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput> | Prisma.ItemVentaCreateWithoutProductoInput[] | Prisma.ItemVentaUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutProductoInput | Prisma.ItemVentaCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.ItemVentaUpsertWithWhereUniqueWithoutProductoInput | Prisma.ItemVentaUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.ItemVentaCreateManyProductoInputEnvelope;
    set?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    disconnect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    delete?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    update?: Prisma.ItemVentaUpdateWithWhereUniqueWithoutProductoInput | Prisma.ItemVentaUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.ItemVentaUpdateManyWithWhereWithoutProductoInput | Prisma.ItemVentaUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
};
export type ItemVentaCreateNestedManyWithoutTransaccionInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput> | Prisma.ItemVentaCreateWithoutTransaccionInput[] | Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput | Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput[];
    createMany?: Prisma.ItemVentaCreateManyTransaccionInputEnvelope;
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
};
export type ItemVentaUncheckedCreateNestedManyWithoutTransaccionInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput> | Prisma.ItemVentaCreateWithoutTransaccionInput[] | Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput | Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput[];
    createMany?: Prisma.ItemVentaCreateManyTransaccionInputEnvelope;
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
};
export type ItemVentaUpdateManyWithoutTransaccionNestedInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput> | Prisma.ItemVentaCreateWithoutTransaccionInput[] | Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput | Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput[];
    upsert?: Prisma.ItemVentaUpsertWithWhereUniqueWithoutTransaccionInput | Prisma.ItemVentaUpsertWithWhereUniqueWithoutTransaccionInput[];
    createMany?: Prisma.ItemVentaCreateManyTransaccionInputEnvelope;
    set?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    disconnect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    delete?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    update?: Prisma.ItemVentaUpdateWithWhereUniqueWithoutTransaccionInput | Prisma.ItemVentaUpdateWithWhereUniqueWithoutTransaccionInput[];
    updateMany?: Prisma.ItemVentaUpdateManyWithWhereWithoutTransaccionInput | Prisma.ItemVentaUpdateManyWithWhereWithoutTransaccionInput[];
    deleteMany?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
};
export type ItemVentaUncheckedUpdateManyWithoutTransaccionNestedInput = {
    create?: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput> | Prisma.ItemVentaCreateWithoutTransaccionInput[] | Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput[];
    connectOrCreate?: Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput | Prisma.ItemVentaCreateOrConnectWithoutTransaccionInput[];
    upsert?: Prisma.ItemVentaUpsertWithWhereUniqueWithoutTransaccionInput | Prisma.ItemVentaUpsertWithWhereUniqueWithoutTransaccionInput[];
    createMany?: Prisma.ItemVentaCreateManyTransaccionInputEnvelope;
    set?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    disconnect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    delete?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    connect?: Prisma.ItemVentaWhereUniqueInput | Prisma.ItemVentaWhereUniqueInput[];
    update?: Prisma.ItemVentaUpdateWithWhereUniqueWithoutTransaccionInput | Prisma.ItemVentaUpdateWithWhereUniqueWithoutTransaccionInput[];
    updateMany?: Prisma.ItemVentaUpdateManyWithWhereWithoutTransaccionInput | Prisma.ItemVentaUpdateManyWithWhereWithoutTransaccionInput[];
    deleteMany?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
};
export type ItemVentaCreateWithoutProductoInput = {
    id?: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    transaccion: Prisma.TransaccionCreateNestedOneWithoutItemsInput;
};
export type ItemVentaUncheckedCreateWithoutProductoInput = {
    id?: string;
    transaccionId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaCreateOrConnectWithoutProductoInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput>;
};
export type ItemVentaCreateManyProductoInputEnvelope = {
    data: Prisma.ItemVentaCreateManyProductoInput | Prisma.ItemVentaCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type ItemVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemVentaUpdateWithoutProductoInput, Prisma.ItemVentaUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.ItemVentaCreateWithoutProductoInput, Prisma.ItemVentaUncheckedCreateWithoutProductoInput>;
};
export type ItemVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemVentaUpdateWithoutProductoInput, Prisma.ItemVentaUncheckedUpdateWithoutProductoInput>;
};
export type ItemVentaUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.ItemVentaScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemVentaUpdateManyMutationInput, Prisma.ItemVentaUncheckedUpdateManyWithoutProductoInput>;
};
export type ItemVentaScalarWhereInput = {
    AND?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
    OR?: Prisma.ItemVentaScalarWhereInput[];
    NOT?: Prisma.ItemVentaScalarWhereInput | Prisma.ItemVentaScalarWhereInput[];
    id?: Prisma.StringFilter<"ItemVenta"> | string;
    productoId?: Prisma.StringFilter<"ItemVenta"> | string;
    transaccionId?: Prisma.StringFilter<"ItemVenta"> | string;
    cantidad?: Prisma.IntFilter<"ItemVenta"> | number;
    precioUnitario?: Prisma.FloatFilter<"ItemVenta"> | number;
    subtotal?: Prisma.FloatFilter<"ItemVenta"> | number;
};
export type ItemVentaCreateWithoutTransaccionInput = {
    id?: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    producto: Prisma.ProductoCreateNestedOneWithoutItemsInput;
};
export type ItemVentaUncheckedCreateWithoutTransaccionInput = {
    id?: string;
    productoId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaCreateOrConnectWithoutTransaccionInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput>;
};
export type ItemVentaCreateManyTransaccionInputEnvelope = {
    data: Prisma.ItemVentaCreateManyTransaccionInput | Prisma.ItemVentaCreateManyTransaccionInput[];
    skipDuplicates?: boolean;
};
export type ItemVentaUpsertWithWhereUniqueWithoutTransaccionInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemVentaUpdateWithoutTransaccionInput, Prisma.ItemVentaUncheckedUpdateWithoutTransaccionInput>;
    create: Prisma.XOR<Prisma.ItemVentaCreateWithoutTransaccionInput, Prisma.ItemVentaUncheckedCreateWithoutTransaccionInput>;
};
export type ItemVentaUpdateWithWhereUniqueWithoutTransaccionInput = {
    where: Prisma.ItemVentaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemVentaUpdateWithoutTransaccionInput, Prisma.ItemVentaUncheckedUpdateWithoutTransaccionInput>;
};
export type ItemVentaUpdateManyWithWhereWithoutTransaccionInput = {
    where: Prisma.ItemVentaScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemVentaUpdateManyMutationInput, Prisma.ItemVentaUncheckedUpdateManyWithoutTransaccionInput>;
};
export type ItemVentaCreateManyProductoInput = {
    id?: string;
    transaccionId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaUpdateWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    transaccion?: Prisma.TransaccionUpdateOneRequiredWithoutItemsNestedInput;
};
export type ItemVentaUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaCreateManyTransaccionInput = {
    id?: string;
    productoId: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
};
export type ItemVentaUpdateWithoutTransaccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
    producto?: Prisma.ProductoUpdateOneRequiredWithoutItemsNestedInput;
};
export type ItemVentaUncheckedUpdateWithoutTransaccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaUncheckedUpdateManyWithoutTransaccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.FloatFieldUpdateOperationsInput | number;
    subtotal?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ItemVentaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    transaccionId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemVenta"]>;
export type ItemVentaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    transaccionId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemVenta"]>;
export type ItemVentaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productoId?: boolean;
    transaccionId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemVenta"]>;
export type ItemVentaSelectScalar = {
    id?: boolean;
    productoId?: boolean;
    transaccionId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
};
export type ItemVentaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productoId" | "transaccionId" | "cantidad" | "precioUnitario" | "subtotal", ExtArgs["result"]["itemVenta"]>;
export type ItemVentaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
};
export type ItemVentaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
};
export type ItemVentaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.ProductoDefaultArgs<ExtArgs>;
    transaccion?: boolean | Prisma.TransaccionDefaultArgs<ExtArgs>;
};
export type $ItemVentaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ItemVenta";
    objects: {
        producto: Prisma.$ProductoPayload<ExtArgs>;
        transaccion: Prisma.$TransaccionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productoId: string;
        transaccionId: string;
        cantidad: number;
        precioUnitario: number;
        subtotal: number;
    }, ExtArgs["result"]["itemVenta"]>;
    composites: {};
};
export type ItemVentaGetPayload<S extends boolean | null | undefined | ItemVentaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload, S>;
export type ItemVentaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemVentaCountAggregateInputType | true;
};
export interface ItemVentaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ItemVenta'];
        meta: {
            name: 'ItemVenta';
        };
    };
    findUnique<T extends ItemVentaFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemVentaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItemVentaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItemVentaFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemVentaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItemVentaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItemVentaFindManyArgs>(args?: Prisma.SelectSubset<T, ItemVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItemVentaCreateArgs>(args: Prisma.SelectSubset<T, ItemVentaCreateArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItemVentaCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItemVentaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItemVentaDeleteArgs>(args: Prisma.SelectSubset<T, ItemVentaDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItemVentaUpdateArgs>(args: Prisma.SelectSubset<T, ItemVentaUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItemVentaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItemVentaUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItemVentaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemVentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItemVentaUpsertArgs>(args: Prisma.SelectSubset<T, ItemVentaUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemVentaClient<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItemVentaCountArgs>(args?: Prisma.Subset<T, ItemVentaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemVentaCountAggregateOutputType> : number>;
    aggregate<T extends ItemVentaAggregateArgs>(args: Prisma.Subset<T, ItemVentaAggregateArgs>): Prisma.PrismaPromise<GetItemVentaAggregateType<T>>;
    groupBy<T extends ItemVentaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemVentaGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemVentaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItemVentaFieldRefs;
}
export interface Prisma__ItemVentaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producto<T extends Prisma.ProductoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaccion<T extends Prisma.TransaccionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransaccionDefaultArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItemVentaFieldRefs {
    readonly id: Prisma.FieldRef<"ItemVenta", 'String'>;
    readonly productoId: Prisma.FieldRef<"ItemVenta", 'String'>;
    readonly transaccionId: Prisma.FieldRef<"ItemVenta", 'String'>;
    readonly cantidad: Prisma.FieldRef<"ItemVenta", 'Int'>;
    readonly precioUnitario: Prisma.FieldRef<"ItemVenta", 'Float'>;
    readonly subtotal: Prisma.FieldRef<"ItemVenta", 'Float'>;
}
export type ItemVentaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    where: Prisma.ItemVentaWhereUniqueInput;
};
export type ItemVentaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    where: Prisma.ItemVentaWhereUniqueInput;
};
export type ItemVentaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemVentaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemVentaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemVentaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemVentaCreateInput, Prisma.ItemVentaUncheckedCreateInput>;
};
export type ItemVentaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItemVentaCreateManyInput | Prisma.ItemVentaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemVentaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    data: Prisma.ItemVentaCreateManyInput | Prisma.ItemVentaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ItemVentaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ItemVentaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemVentaUpdateInput, Prisma.ItemVentaUncheckedUpdateInput>;
    where: Prisma.ItemVentaWhereUniqueInput;
};
export type ItemVentaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItemVentaUpdateManyMutationInput, Prisma.ItemVentaUncheckedUpdateManyInput>;
    where?: Prisma.ItemVentaWhereInput;
    limit?: number;
};
export type ItemVentaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemVentaUpdateManyMutationInput, Prisma.ItemVentaUncheckedUpdateManyInput>;
    where?: Prisma.ItemVentaWhereInput;
    limit?: number;
    include?: Prisma.ItemVentaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ItemVentaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    where: Prisma.ItemVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemVentaCreateInput, Prisma.ItemVentaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItemVentaUpdateInput, Prisma.ItemVentaUncheckedUpdateInput>;
};
export type ItemVentaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
    where: Prisma.ItemVentaWhereUniqueInput;
};
export type ItemVentaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemVentaWhereInput;
    limit?: number;
};
export type ItemVentaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemVentaSelect<ExtArgs> | null;
    omit?: Prisma.ItemVentaOmit<ExtArgs> | null;
    include?: Prisma.ItemVentaInclude<ExtArgs> | null;
};
