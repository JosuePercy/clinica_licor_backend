import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import type { Role } from '../role.enum';

export interface CurrentUserPayload {
  id: string;
  role: Role;
}

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): CurrentUserPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
