import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { CommentDto } from '@src/dto/commnet.dto';
import { CommentFindByPostIdUseCase } from '@src/modules/comment/usecase/comment-find-by-id.usecase';

@Resolver(() => CommentDto)
export class CommentResolver {
  constructor(
    private readonly commentFindByPostIdUseCase: CommentFindByPostIdUseCase,
  ) {}

  @Query(() => [CommentDto], { name: 'comment' })
  async findById(@Args('postId', { type: () => Int }) id: number) {
    return this.commentFindByPostIdUseCase.invoke(id);
  }
}
