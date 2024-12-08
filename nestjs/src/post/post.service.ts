import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreatePostDto } from "./dto/post.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class PostService {
  userService: UserService;

  constructor(private prisma: PrismaService) {
    this.userService = new UserService(this.prisma)
  }

  async getAllPosts() {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
  }

  async getPostByUserId(userId: string) {
    const user = this.userService.getUserById(userId)
    const articles =  await this.prisma.post.findMany({
      where: {
        authorId: userId,
      },
    });
    return {
      author: user,
      articles: articles
    }
  }

  async createPost(body: CreatePostDto) {
    return this.prisma.post.create({
      data: body,
    });
  }

  async deletePost(id: string) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
