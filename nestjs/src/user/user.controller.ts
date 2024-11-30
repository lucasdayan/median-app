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
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
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
