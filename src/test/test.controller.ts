import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role, Roles } from 'src/auth/decorator/roles.decorator';
import { JWTGuard, RolesGuard, SpecialAccessGuard } from 'src/auth/guards';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(JWTGuard, RolesGuard, SpecialAccessGuard)
  @Roles(Role.Admin)
  getTests() {
    return { test: 'access allowed' };
  }
}
