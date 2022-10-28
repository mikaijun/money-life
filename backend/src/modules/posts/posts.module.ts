import { Module } from '@nestjs/common';

import { PostsResolver } from '@pb-modules/posts/resolvers/posts.resolvers';
import { PostRepository } from '@pb-repositories/post-repository';
import { PostGetUseCase } from '@pb-modules/posts/usecases/posts-get.usecase';
import { PostSaveUseCase } from '@pb-modules/posts/usecases/posts-save-usecase';
import { PostFindUseCase } from '@pb-modules/posts/usecases/post-find.usecase';

@Module({
  providers: [
    PostsResolver,
    PostGetUseCase,
    PostRepository,
    PostSaveUseCase,
    PostFindUseCase,
  ],
})
export class PostsModule {}
