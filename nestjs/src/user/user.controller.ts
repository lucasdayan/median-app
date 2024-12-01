import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
async createUser(@Body() createUserDto: CreateUserDto) {
  try {
    const user = await this.userService.createUser(createUserDto);
    return { success: true, user };
  } catch (error) {
    if (error.code === "P2002") {
      return {
        success: false,
        user: {
          message: "Email already exists",
          status: 400,
          error: true
        }
      };
    }
    return {
      success: false,
      user: {
        message: "Internal Server Error",
        status: 500,
        error: true
      }
    };
  }
}

  @UseGuards(AuthGuard)
  @Get("/:id")
  async getUserById(@Param("id") id: string) {
    return this.userService.getUserById(id);
  }

  @Get("/:email")
  async getUserByUsername(@Param("email") email: string) {
    return this.userService.getUserByEmail(email);
  }

  @UseGuards(AuthGuard)
  @Delete()
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}
