import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransaccionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransaccionPayload>;
export type AggregateTransaccion = {
    _count: TransaccionCountAggregateOutputType | null;
    _avg: TransaccionAvgAggregateOutputType | null;
    _sum: TransaccionSumAggregateOutputType | null;
    _min: TransaccionMinAggregateOutputType | null;
    _max: TransaccionMaxAggregateOutputType | null;
};
export type TransaccionAvgAggregateOutputType = {
    total: number | null;
};
export type TransaccionSumAggregateOutputType = {
    total: number | null;
};
export type TransaccionMinAggregateOutputType = {
    id: string | null;
    codigoVenta: string | null;
    total: number | null;
    fecha: Date | null;
    createdAt: Date | null;
};
export type TransaccionMaxAggregateOutputType = {
    id: string | null;
    codigoVenta: string | null;
    total: number | null;
    fecha: Date | null;
    createdAt: Date | null;
};
export type TransaccionCountAggregateOutputType = {
    id: number;
    codigoVenta: number;
    total: number;
    fecha: number;
    createdAt: number;
    _all: number;
};
export type TransaccionAvgAggregateInputType = {
    total?: true;
};
export type TransaccionSumAggregateInputType = {
    total?: true;
};
export type TransaccionMinAggregateInputType = {
    id?: true;
    codigoVenta?: true;
    total?: true;
    fecha?: true;
    createdAt?: true;
};
export type TransaccionMaxAggregateInputType = {
    id?: true;
    codigoVenta?: true;
    total?: true;
    fecha?: true;
    createdAt?: true;
};
export type TransaccionCountAggregateInputType = {
    id?: true;
    codigoVenta?: true;
    total?: true;
    fecha?: true;
    createdAt?: true;
    _all?: true;
};
export type TransaccionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransaccionCountAggregateInputType;
    _avg?: TransaccionAvgAggregateInputType;
    _sum?: TransaccionSumAggregateInputType;
    _min?: TransaccionMinAggregateInputType;
    _max?: TransaccionMaxAggregateInputType;
};
export type GetTransaccionAggregateType<T extends TransaccionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaccion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaccion[P]> : Prisma.GetScalarType<T[P], AggregateTransaccion[P]>;
};
export type TransaccionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithAggregationInput | Prisma.TransaccionOrderByWithAggregationInput[];
    by: Prisma.TransaccionScalarFieldEnum[] | Prisma.TransaccionScalarFieldEnum;
    having?: Prisma.TransaccionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransaccionCountAggregateInputType | true;
    _avg?: TransaccionAvgAggregateInputType;
    _sum?: TransaccionSumAggregateInputType;
    _min?: TransaccionMinAggregateInputType;
    _max?: TransaccionMaxAggregateInputType;
};
export type TransaccionGroupByOutputType = {
    id: string;
    codigoVenta: string;
    total: number;
    fecha: Date;
    createdAt: Date;
    _count: TransaccionCountAggregateOutputType | null;
    _avg: TransaccionAvgAggregateOutputType | null;
    _sum: TransaccionSumAggregateOutputType | null;
    _min: TransaccionMinAggregateOutputType | null;
    _max: TransaccionMaxAggregateOutputType | null;
};
export type GetTransaccionGroupByPayload<T extends TransaccionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransaccionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransaccionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransaccionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransaccionGroupByOutputType[P]>;
}>>;
export type TransaccionWhereInput = {
    AND?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    OR?: Prisma.TransaccionWhereInput[];
    NOT?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    id?: Prisma.StringFilter<"Transaccion"> | string;
    codigoVenta?: Prisma.StringFilter<"Transaccion"> | string;
    total?: Prisma.FloatFilter<"Transaccion"> | number;
    fecha?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    items?: Prisma.ItemVentaListRelationFilter;
};
export type TransaccionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigoVenta?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    items?: Prisma.ItemVentaOrderByRelationAggregateInput;
};
export type TransaccionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigoVenta?: string;
    AND?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    OR?: Prisma.TransaccionWhereInput[];
    NOT?: Prisma.TransaccionWhereInput | Prisma.TransaccionWhereInput[];
    total?: Prisma.FloatFilter<"Transaccion"> | number;
    fecha?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Transaccion"> | Date | string;
    items?: Prisma.ItemVentaListRelationFilter;
}, "id" | "codigoVenta">;
export type TransaccionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigoVenta?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TransaccionCountOrderByAggregateInput;
    _avg?: Prisma.TransaccionAvgOrderByAggregateInput;
    _max?: Prisma.TransaccionMaxOrderByAggregateInput;
    _min?: Prisma.TransaccionMinOrderByAggregateInput;
    _sum?: Prisma.TransaccionSumOrderByAggregateInput;
};
export type TransaccionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransaccionScalarWhereWithAggregatesInput | Prisma.TransaccionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransaccionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransaccionScalarWhereWithAggregatesInput | Prisma.TransaccionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transaccion"> | string;
    codigoVenta?: Prisma.StringWithAggregatesFilter<"Transaccion"> | string;
    total?: Prisma.FloatWithAggregatesFilter<"Transaccion"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Transaccion"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transaccion"> | Date | string;
};
export type TransaccionCreateInput = {
    id?: string;
    codigoVenta: string;
    total: number;
    fecha?: Date | string;
    createdAt?: Date | string;
    items?: Prisma.ItemVentaCreateNestedManyWithoutTransaccionInput;
};
export type TransaccionUncheckedCreateInput = {
    id?: string;
    codigoVenta: string;
    total: number;
    fecha?: Date | string;
    createdAt?: Date | string;
    items?: Prisma.ItemVentaUncheckedCreateNestedManyWithoutTransaccionInput;
};
export type TransaccionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemVentaUpdateManyWithoutTransaccionNestedInput;
};
export type TransaccionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemVentaUncheckedUpdateManyWithoutTransaccionNestedInput;
};
export type TransaccionCreateManyInput = {
    id?: string;
    codigoVenta: string;
    total: number;
    fecha?: Date | string;
    createdAt?: Date | string;
};
export type TransaccionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransaccionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransaccionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoVenta?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransaccionAvgOrderByAggregateInput = {
    total?: Prisma.SortOrder;
};
export type TransaccionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoVenta?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransaccionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigoVenta?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TransaccionSumOrderByAggregateInput = {
    total?: Prisma.SortOrder;
};
export type TransaccionScalarRelationFilter = {
    is?: Prisma.TransaccionWhereInput;
    isNot?: Prisma.TransaccionWhereInput;
};
export type TransaccionCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutItemsInput, Prisma.TransaccionUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutItemsInput;
    connect?: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.TransaccionCreateWithoutItemsInput, Prisma.TransaccionUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.TransaccionCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.TransaccionUpsertWithoutItemsInput;
    connect?: Prisma.TransaccionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransaccionUpdateToOneWithWhereWithoutItemsInput, Prisma.TransaccionUpdateWithoutItemsInput>, Prisma.TransaccionUncheckedUpdateWithoutItemsInput>;
};
export type TransaccionCreateWithoutItemsInput = {
    id?: string;
    codigoVenta: string;
    total: number;
    fecha?: Date | string;
    createdAt?: Date | string;
};
export type TransaccionUncheckedCreateWithoutItemsInput = {
    id?: string;
    codigoVenta: string;
    total: number;
    fecha?: Date | string;
    createdAt?: Date | string;
};
export type TransaccionCreateOrConnectWithoutItemsInput = {
    where: Prisma.TransaccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutItemsInput, Prisma.TransaccionUncheckedCreateWithoutItemsInput>;
};
export type TransaccionUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.TransaccionUpdateWithoutItemsInput, Prisma.TransaccionUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.TransaccionCreateWithoutItemsInput, Prisma.TransaccionUncheckedCreateWithoutItemsInput>;
    where?: Prisma.TransaccionWhereInput;
};
export type TransaccionUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.TransaccionWhereInput;
    data: Prisma.XOR<Prisma.TransaccionUpdateWithoutItemsInput, Prisma.TransaccionUncheckedUpdateWithoutItemsInput>;
};
export type TransaccionUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransaccionUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigoVenta?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransaccionCountOutputType = {
    items: number;
};
export type TransaccionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | TransaccionCountOutputTypeCountItemsArgs;
};
export type TransaccionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionCountOutputTypeSelect<ExtArgs> | null;
};
export type TransaccionCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemVentaWhereInput;
};
export type TransaccionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoVenta?: boolean;
    total?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
    items?: boolean | Prisma.Transaccion$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransaccionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoVenta?: boolean;
    total?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigoVenta?: boolean;
    total?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["transaccion"]>;
export type TransaccionSelectScalar = {
    id?: boolean;
    codigoVenta?: boolean;
    total?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
};
export type TransaccionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigoVenta" | "total" | "fecha" | "createdAt", ExtArgs["result"]["transaccion"]>;
export type TransaccionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | Prisma.Transaccion$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.TransaccionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransaccionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TransaccionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TransaccionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaccion";
    objects: {
        items: Prisma.$ItemVentaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        codigoVenta: string;
        total: number;
        fecha: Date;
        createdAt: Date;
    }, ExtArgs["result"]["transaccion"]>;
    composites: {};
};
export type TransaccionGetPayload<S extends boolean | null | undefined | TransaccionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransaccionPayload, S>;
export type TransaccionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransaccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransaccionCountAggregateInputType | true;
};
export interface TransaccionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaccion'];
        meta: {
            name: 'Transaccion';
        };
    };
    findUnique<T extends TransaccionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransaccionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransaccionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransaccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransaccionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransaccionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransaccionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransaccionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransaccionFindManyArgs>(args?: Prisma.SelectSubset<T, TransaccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransaccionCreateArgs>(args: Prisma.SelectSubset<T, TransaccionCreateArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransaccionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransaccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransaccionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransaccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransaccionDeleteArgs>(args: Prisma.SelectSubset<T, TransaccionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransaccionUpdateArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransaccionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransaccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransaccionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransaccionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransaccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransaccionUpsertArgs>(args: Prisma.SelectSubset<T, TransaccionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransaccionClient<runtime.Types.Result.GetResult<Prisma.$TransaccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransaccionCountArgs>(args?: Prisma.Subset<T, TransaccionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransaccionCountAggregateOutputType> : number>;
    aggregate<T extends TransaccionAggregateArgs>(args: Prisma.Subset<T, TransaccionAggregateArgs>): Prisma.PrismaPromise<GetTransaccionAggregateType<T>>;
    groupBy<T extends TransaccionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransaccionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransaccionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransaccionFieldRefs;
}
export interface Prisma__TransaccionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    items<T extends Prisma.Transaccion$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaccion$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransaccionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaccion", 'String'>;
    readonly codigoVenta: Prisma.FieldRef<"Transaccion", 'String'>;
    readonly total: Prisma.FieldRef<"Transaccion", 'Float'>;
    readonly fecha: Prisma.FieldRef<"Transaccion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Transaccion", 'DateTime'>;
}
export type TransaccionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where?: Prisma.TransaccionWhereInput;
    orderBy?: Prisma.TransaccionOrderByWithRelationInput | Prisma.TransaccionOrderByWithRelationInput[];
    cursor?: Prisma.TransaccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransaccionScalarFieldEnum | Prisma.TransaccionScalarFieldEnum[];
};
export type TransaccionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionCreateInput, Prisma.TransaccionUncheckedCreateInput>;
};
export type TransaccionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransaccionCreateManyInput | Prisma.TransaccionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransaccionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    data: Prisma.TransaccionCreateManyInput | Prisma.TransaccionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransaccionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionUpdateInput, Prisma.TransaccionUncheckedUpdateInput>;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyInput>;
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
};
export type TransaccionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransaccionUpdateManyMutationInput, Prisma.TransaccionUncheckedUpdateManyInput>;
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
};
export type TransaccionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransaccionCreateInput, Prisma.TransaccionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransaccionUpdateInput, Prisma.TransaccionUncheckedUpdateInput>;
};
export type TransaccionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
    where: Prisma.TransaccionWhereUniqueInput;
};
export type TransaccionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransaccionWhereInput;
    limit?: number;
};
export type Transaccion$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TransaccionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransaccionSelect<ExtArgs> | null;
    omit?: Prisma.TransaccionOmit<ExtArgs> | null;
    include?: Prisma.TransaccionInclude<ExtArgs> | null;
};
