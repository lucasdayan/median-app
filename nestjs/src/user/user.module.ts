import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaService } from "src/database/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  providers: [UserService, PrismaService, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
