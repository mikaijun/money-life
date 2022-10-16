import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostModel } from '@pb-models/posts.model';
import { PostGetUseCase } from '../usecases/posts-get.usecase';
import { PostSaveUseCase } from '../usecases/posts-save-usecase';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(
    private readonly postGetUseCase: PostGetUseCase,
    private readonly postSaveUseCase: PostSaveUseCase,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async findAll() {
    return this.postGetUseCase.invoke();
  }

  @Mutation(() => PostModel)
  async save(@Args({ name: 'postId', type: () => String }) postId: string) {
    return this.postSaveUseCase.invoke(postId);
  }
}
