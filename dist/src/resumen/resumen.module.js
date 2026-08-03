"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumenModule = void 0;
const common_1 = require("@nestjs/common");
const resumen_service_1 = require("./resumen.service");
const resumen_controller_1 = require("./resumen.controller");
const resumen_repository_1 = require("./resumen.repository");
let ResumenModule = class ResumenModule {
};
exports.ResumenModule = ResumenModule;
exports.ResumenModule = ResumenModule = __decorate([
    (0, common_1.Module)({
        controllers: [resumen_controller_1.ResumenController],
        providers: [resumen_service_1.ResumenService, resumen_repository_1.ResumenRepository],
    })
], ResumenModule);
//# sourceMappingURL=resumen.module.js.map