import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError, Prisma.PrismaClientValidationError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const isDev = process.env.NODE_ENV !== 'production';

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno del servidor';

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          statusCode = HttpStatus.CONFLICT;
          message = `Ya existe un registro con ese valor único (${exception.meta?.target})`;
          break;
        case 'P2025':
          statusCode = HttpStatus.NOT_FOUND;
          message = 'Registro no encontrado';
          break;
        case 'P2003':
          statusCode = HttpStatus.BAD_REQUEST;
          message = `Referencia inválida (${exception.meta?.field_name ?? 'foreign key'})`;
          break;
        case 'P2021':
          statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
          message = `La tabla no existe en la base de datos (${exception.meta?.table ?? ''})`;
          break;
        default:
          message = `Error de base de datos (${exception.code})`;
      }
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      statusCode = HttpStatus.BAD_REQUEST;
      message = 'Datos inválidos enviados a la base de datos';
    }

    response.status(statusCode).json({
      statusCode,
      message,
      ...(isDev && { detail: exception.message }), // 👈 solo en desarrollo, el error crudo completo
    });
  }
}