import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PostsModule } from '@pb-modules/posts/posts.module';
import { EnvModule } from '@pb-library/config/env.module';
import { PrismaModule } from '@pb-library/prisma/prisma.module';
import { EnvService } from '@pb-library/config/env.service';

@Module({
  imports: [
    EnvModule,
    GraphQLModule.forRootAsync({
      inject: [EnvService],
      useFactory: (env: EnvService) => env.GqlModuleOptionsFactory,
    }),
    PrismaModule.forRootAsync({
      inject: [EnvService],
      isGlobal: true,
      useFactory: (env: EnvService) => ({
        prismaOptions: env.PrismaOptionsFactory,
      }),
    }),
    PostsModule,
  ],
})
export class AppModule {}
