import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLoggerService implements LoggerService {
    error(message: any, trace?: string, context?: string): any {
        console.log('Custom error: ', message);
    }

    log(message: any, context?: string): any {
        console.log('Custom log: ', message);
    }

    warn(message: any, context?: string): any {
        console.log('Custom warn: ', message);
    }
}
