import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/auth.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async signIn(
    @Body() body: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    await this.authService.signIn(body.email, body.password, res);
    return { message: "Login successful" };
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  async getProfile(@Request() req) {
    return req.user;
  }

  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    await this.authService.logout(res);
    return { message: "Logout successful" };
  }
}
