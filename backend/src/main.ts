import { NestFactory } from '@nestjs/core';
import { PbEnv } from '@pb-services/pb-env.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pbEnv = app.get(PbEnv);
  await app.listen(pbEnv.Port, '0.0.0.0'); // 外部からリクエストを受け付けられるように 0.0.0.0 を追加
}
bootstrap();
