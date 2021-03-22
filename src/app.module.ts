import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLoggerModule } from "./logger/logger.module";

@Module({})
export class AppModule {
  public static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [
          CustomLoggerModule.register(),
      ],
      controllers: [
        AppController,
      ],
      providers: [
        AppService,
      ],
    };
  }
}
