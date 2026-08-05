"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenController = void 0;
const common_1 = require("@nestjs/common");
const resumen_service_1 = require("./resumen.service");
const resumen_dto_1 = require("./dto/resumen.dto");
let ResumenController = class ResumenController {
    resumenService;
    constructor(resumenService) {
        this.resumenService = resumenService;
    }
    getResumen(filtros) {
        return this.resumenService.getResumenMensual(filtros.mes, filtros.anio);
    }
    getProductoMasVendido() {
        return this.resumenService.getProductoMasVendido();
    }
};
exports.ResumenController = ResumenController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resumen_dto_1.FiltroResumenDto]),
    __metadata("design:returntype", void 0)
], ResumenController.prototype, "getResumen", null);
__decorate([
    (0, common_1.Get)('top-producto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResumenController.prototype, "getProductoMasVendido", null);
exports.ResumenController = ResumenController = __decorate([
    (0, common_1.Controller)('resumen'),
    __metadata("design:paramtypes", [resumen_service_1.ResumenService])
], ResumenController);
