import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: "GET,POST,PUT,DELETE, PATCH, OPTIONS",
    allowedHeaders:
      "Content-Type, Authorization, Cookie, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods",
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(5000);
}
bootstrap();
