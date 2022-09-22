import { ExceptionFilter, Catch, ArgumentsHost} from '@nestjs/common';
import { Response } from 'express';
import { ApiError } from 'src/custom-errorclass/custom-errorclass';

@Catch(ApiError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: ApiError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.getResponse();
    response
      .status(status)
      .json({
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString()
      });
  }
}