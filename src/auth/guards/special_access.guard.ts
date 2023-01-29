import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SpecialAccessGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const superAdminId = this.config.get('SUPER_ADMIN');
    const { user } = context.switchToHttp().getRequest();

    if (user?.id === +superAdminId) {
      return true;
    }

    return false;
  }
}
