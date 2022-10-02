import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './components/posts/posts.module';
import { validate } from './config/environments/env-validator';
import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
    }),
    PostsModule,
  ],
})
export class AppModule {}
