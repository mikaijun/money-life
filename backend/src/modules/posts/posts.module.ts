import { Module } from '@nestjs/common';

import { PostsResolver } from '@src/modules/posts/resolvers/posts.resolvers';
import { PostRepository } from '@src/repositories/post-repository';
import { PostFindAllUseCase } from '@src/modules/posts/usecases/posts-find-all.usecase';
import { PostSaveUseCase } from '@src/modules/posts/usecases/posts-save-usecase';
import { PostFindByIdUseCase } from '@src/modules/posts/usecases/post-find-by-id.usecase';

@Module({
  providers: [
    PostsResolver,
    PostFindAllUseCase,
    PostRepository,
    PostSaveUseCase,
    PostFindByIdUseCase,
  ],
})
export class PostsModule {}
