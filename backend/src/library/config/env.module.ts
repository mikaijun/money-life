import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validate } from '@pb-library/config/env.validator';
import { EnvService } from '@pb-library/config/env.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validate,
      isGlobal: true,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
