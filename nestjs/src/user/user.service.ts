import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateUserDto } from "./dto/user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    console.log(bcrypt);
    try {
      const { name, email, password } = data;

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      const hashedData = {
        name,
        email,
        password: hashedPassword,
      };

      await this.prisma.user.create({
        data: hashedData,
      });
      return {
        message: "User created",
        status: 201,
        error: false,
      };
    } catch (error) {
      return {
        message: error.message,
        status: 500,
        error: true,
      };
    }
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
