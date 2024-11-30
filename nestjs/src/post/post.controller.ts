import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { AuthGuard } from "src/auth/auth.guard";
import { CreatePostDto } from "./dto/post.dto";

@UseGuards(AuthGuard)
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get("/:id")
  async getPostById(@Param("id") id: string) {
    return this.postService.getPostById(id);
  }

  @Get("/user/:id")
  async getPostByUserId(@Param("id") id: string) {
    return this.postService.getPostByUserId(id);
  }

  @Post()
  async createPost(@Body() body: CreatePostDto) {
    return this.postService.createPost(body);
  }

  @Delete("/:id")
  async deletePost(@Param("id") id: string) {
    return this.postService.deletePost(id);
  }
}
