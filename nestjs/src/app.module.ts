import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { PrismaService } from "./database/prisma.service";

@Module({
  imports: [AuthModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
