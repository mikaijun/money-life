import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CommentSaveDto, CommentSaveDtoType } from 'dto/comment-save.dto';
import { CommentDto } from 'dto/commnet.dto';
import { CommentFindByPostIdUseCase } from 'modules/comment/usecase/comment-find-by-id.usecase';
import { CommentSaveUseCase } from 'modules/comment/usecase/comment-save-usecase';

@Resolver(() => CommentDto)
export class CommentResolver {
  constructor(
    private readonly commentFindByPostIdUseCase: CommentFindByPostIdUseCase,
    private readonly commentSaveUseCase: CommentSaveUseCase,
  ) {}

  @Query(() => [CommentDto], { name: 'comment' })
  async findById(@Args('postId', { type: () => Int }) id: number) {
    return this.commentFindByPostIdUseCase.invoke(id);
  }

  @Mutation(() => CommentDto)
  async saveComment(
    @Args({ name: 'input', type: () => CommentSaveDto })
    input: CommentSaveDtoType,
  ) {
    return this.commentSaveUseCase.invoke(input);
  }
}
