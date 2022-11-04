import { Module } from '@nestjs/common';

import { PostsResolver } from 'modules/posts/resolvers/posts.resolvers';
import { PostRepository } from 'repositories/post-repository';
import { PostFindAllUseCase } from 'modules/posts/usecases/posts-find-all.usecase';
import { PostSaveUseCase } from 'modules/posts/usecases/posts-save-usecase';
import { PostFindByIdUseCase } from 'modules/posts/usecases/post-find-by-id.usecase';

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
