import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolvers';

@Module({
  providers: [PostsResolver],
})
export class PostsModule {}
