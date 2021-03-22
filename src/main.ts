import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from "./logger/logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register(), { logger: false });

  app.useLogger(app.get(CustomLoggerService));
  await app.listen(3000);
}
bootstrap();
