import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostModel } from '@pb-models/posts.model';
import { PostFindUseCase } from '../usecases/post-find.usecase';
import { PostInput, PostInputType } from '@pb-models/post-input.model';
import { PostGetUseCase } from '../usecases/posts-get.usecase';
import { PostSaveUseCase } from '../usecases/posts-save-usecase';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(
    private readonly postFindUseCase: PostFindUseCase,
    private readonly postGetUseCase: PostGetUseCase,
    private readonly postSaveUseCase: PostSaveUseCase,
  ) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async findAll() {
    return this.postGetUseCase.invoke();
  }

  @Query(() => PostModel, { name: 'post', nullable: true })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.postFindUseCase.invoke(id);
  }

  @Mutation(() => PostModel)
  async save(
    @Args({ name: 'input', type: () => PostInput }) input: PostInputType,
  ) {
    return this.postSaveUseCase.invoke(input);
  }
}
