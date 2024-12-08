import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateUserDto } from "./dto/user.dto";
import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    try {
      const { name, email, password } = data;

      const emailExists = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (emailExists) {
        throw new Error("Email already exists");
      }

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
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return this.sanitizeUserInformation(user);
  }

  async getUserByEmail(email: string, sanitizeInformation:boolean = true) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (sanitizeInformation) {
      return this.sanitizeUserInformation(user);
    } else {
      return user;
    }
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return this.sanitizeUserInformation(user);
  }

  sanitizeUserInformation(user: User): User {
    return {...user, password: null}
  }
}
