import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string, res: Response): Promise<void> {
    const user = await this.userService.getUserByEmail(email, false);
    if (!user) {
      throw new NotFoundException();
    }
    const isPasswordValid = bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const expires = new Date();
    expires.setHours(expires.getHours() + 1);

    const payload = { sub: user.id, username: user.email };
    const token = this.jwtService.sign(payload);
    res.cookie("auth", token, {
      expires,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  }

  async logout(res: Response): Promise<void> {
    res.clearCookie("auth");
  }
}
