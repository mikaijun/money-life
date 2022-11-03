import { Module } from '@nestjs/common';

import { CommentResolver } from './resolvers/comment.resolvers';
import { CommentRepository } from '@src/repositories/comment-repository';
import { CommentFindByPostIdUseCase } from '@src/modules/comment/usecase/comment-find-by-id.usecase';
import { CommentSaveUseCase } from '@src/modules/comment/usecase/comment-save-usecase';

@Module({
  providers: [
    CommentResolver,
    CommentRepository,
    CommentFindByPostIdUseCase,
    CommentSaveUseCase,
  ],
})
export class CommentModule {}
