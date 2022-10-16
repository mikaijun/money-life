import { Module } from '@nestjs/common';

import { PostsResolver } from '@pb-modules/posts/posts.resolvers';

@Module({
  providers: [PostsResolver],
})
export class PostsModule {}
