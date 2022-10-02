import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './components/posts/posts.module';
import { validate } from './config/environments/env-validator';
import { PbEnvModule } from '@pb-config/environments/pb-env.module';
import * as path from 'path';
import { PbEnv } from './config/environments/pb-env.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [PbEnv],
      useFactory: (env: PbEnv) => env.GqlModuleOptionsFactory,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
    }),
    PbEnvModule,
    PostsModule,
  ],
})
export class AppModule {}
