import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Producto: "Producto";
    readonly Transaccion: "Transaccion";
    readonly ItemVenta: "ItemVenta";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProductoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly precio: "precio";
    readonly stock: "stock";
    readonly categoria: "categoria";
    readonly tamano: "tamano";
    readonly unidad: "unidad";
    readonly activo: "activo";
    readonly codigo: "codigo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const TransaccionScalarFieldEnum: {
    readonly id: "id";
    readonly codigoVenta: "codigoVenta";
    readonly total: "total";
    readonly fecha: "fecha";
    readonly createdAt: "createdAt";
};
export type TransaccionScalarFieldEnum = (typeof TransaccionScalarFieldEnum)[keyof typeof TransaccionScalarFieldEnum];
export declare const ItemVentaScalarFieldEnum: {
    readonly id: "id";
    readonly productoId: "productoId";
    readonly transaccionId: "transaccionId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly subtotal: "subtotal";
};
export type ItemVentaScalarFieldEnum = (typeof ItemVentaScalarFieldEnum)[keyof typeof ItemVentaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
