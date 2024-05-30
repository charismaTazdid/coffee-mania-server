import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const bootstrap = async () => {
  const app = NestFactory.create(AppModule);
  (await app).listen(5000)
}
bootstrap();