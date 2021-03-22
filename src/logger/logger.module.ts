import { DynamicModule, Global, Module } from '@nestjs/common';
import { CustomLoggerService } from "./logger.service";

@Global()
@Module({})
export class CustomLoggerModule {
    public static register(): DynamicModule {
        return {
            module: CustomLoggerModule,
            providers: [CustomLoggerService],
            exports: [CustomLoggerService],
        };
    }
}
