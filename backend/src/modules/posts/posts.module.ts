import { Module } from '@nestjs/common';

import { PostsResolver } from '@src/modules/posts/resolvers/posts.resolvers';
import { PostRepository } from '@src/repositories/post-repository';
import { PostGetUseCase } from '@src/modules/posts/usecases/posts-get.usecase';
import { PostSaveUseCase } from '@src/modules/posts/usecases/posts-save-usecase';
import { PostFindUseCase } from '@src/modules/posts/usecases/post-find.usecase';

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
