import { NestFactory } from '@nestjs/core';
import { EnvService } from 'library/config/env.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);
  await app.listen(envService.Port, '0.0.0.0'); // 外部からリクエストを受け付けられるように 0.0.0.0 を追加
}
bootstrap();
