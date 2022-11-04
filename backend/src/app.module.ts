import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PostsModule } from 'modules/posts/posts.module';
import { CommentModule } from 'modules/comment/comment.module';
import { EnvModule } from 'library/config/env.module';
import { PrismaModule } from 'library/prisma/prisma.module';
import { EnvService } from 'library/config/env.service';

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
    CommentModule,
  ],
})
export class AppModule {}
