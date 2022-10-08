import { NestFactory } from '@nestjs/core';
import { PrismaService } from '@pb-components/prisma/prisma.service';
import { PbEnv } from '@pb-config/environments/pb-env.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const winstonLogger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(winstonLogger);
  const pbEnv = app.get(PbEnv);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  prismaService.enableLogger(winstonLogger);
  console.log('発火確認')
  await app.listen(pbEnv.Port, '0.0.0.0'); // 外部からリクエストを受け付けられるように 0.0.0.0 を追加
  console.log('発火確認2')
  winstonLogger.log(`PORT: ${pbEnv.Port}`);
}
bootstrap();
