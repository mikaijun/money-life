import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PostsModule } from '@pb-modules/posts/posts.module';
import { PbEnvModule } from '@pb-modules/pb-env/pb-env.module';
import { PrismaModule } from '@pb-prisma/prisma.module';
import { PbEnv } from '@pb-services/pb-env.service';

@Module({
  imports: [
    PbEnvModule,
    GraphQLModule.forRootAsync({
      inject: [PbEnv],
      useFactory: (env: PbEnv) => env.GqlModuleOptionsFactory,
    }),
    PrismaModule.forRootAsync({
      inject: [PbEnv],
      isGlobal: true,
      useFactory: (env: PbEnv) => ({
        prismaOptions: env.PrismaOptionsFactory,
      }),
    }),
    PostsModule,
  ],
})
export class AppModule {}
