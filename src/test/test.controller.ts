import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role, Roles } from 'src/auth/decorator/roles.decorator';
import { JWTGuard, RolesGuard } from 'src/auth/guards';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(JWTGuard, RolesGuard)
  @Roles(Role.Admin)
  getTests() {
    return { test: 'test' };
  }
}
