import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreatePostDto } from "./dto/post.dto";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

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
    return this.prisma.post.findMany({
      where: {
        authorId: userId,
      },
    });
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
