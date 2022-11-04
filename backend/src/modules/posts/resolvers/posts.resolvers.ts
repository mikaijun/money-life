import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostDto } from 'dto/post.dto';
import { PostSaveDto, PostSaveDtoType } from 'dto/post-save.dto';
import { PostFindByIdUseCase } from 'modules/posts/usecases/post-find-by-id.usecase';
import { PostFindAllUseCase } from 'modules/posts/usecases/posts-find-all.usecase';
import { PostSaveUseCase } from 'modules/posts/usecases/posts-save-usecase';

@Resolver(() => PostDto)
export class PostsResolver {
  constructor(
    private readonly postFindByIdUseCase: PostFindByIdUseCase,
    private readonly postFindAllUseCase: PostFindAllUseCase,
    private readonly postSaveUseCase: PostSaveUseCase,
  ) {}

  @Query(() => [PostDto], { name: 'posts', nullable: true })
  async findAll() {
    return this.postFindAllUseCase.invoke();
  }

  @Query(() => PostDto, { name: 'post', nullable: true })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.postFindByIdUseCase.invoke(id);
  }

  @Mutation(() => PostDto)
  async savePost(
    @Args({ name: 'input', type: () => PostSaveDto })
    input: PostSaveDtoType,
  ) {
    return this.postSaveUseCase.invoke(input);
  }
}
