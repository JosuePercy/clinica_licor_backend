"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarCodigoBarras = generarCodigoBarras;
function generarCodigoBarras(ultimoCodigo) {
    const prefix = 'LIC';
    const nextNumber = ultimoCodigo
        ? parseInt(ultimoCodigo.split('-')[1], 10) + 1
        : 1;
    return `${prefix}-${nextNumber.toString().padStart(6, '0')}`;
}
//# sourceMappingURL=barcode.generator.js.map