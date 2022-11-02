import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostDto } from '@src/dto/post.dto';
import { PostSaveDto, PostSaveDtoType } from '@src/dto/post-save.dto';
import { PostFindByIdUseCase } from '@src/modules/posts/usecases/post-find-by-id.usecase';
import { PostFindAllUseCase } from '@src/modules/posts/usecases/posts-find-all.usecase';
import { PostSaveUseCase } from '@src/modules/posts/usecases/posts-save-usecase';

@Resolver(() => PostDto)
export class PostsResolver {
  constructor(
    private readonly PostFindByIdUseCase: PostFindByIdUseCase,
    private readonly PostFindAllUseCase: PostFindAllUseCase,
    private readonly postSaveUseCase: PostSaveUseCase,
  ) {}

  @Query(() => [PostDto], { name: 'posts', nullable: true })
  async findAll() {
    return this.PostFindAllUseCase.invoke();
  }

  @Query(() => PostDto, { name: 'post', nullable: true })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.PostFindByIdUseCase.invoke(id);
  }

  @Mutation(() => PostDto)
  async save(
    @Args({ name: 'input', type: () => PostSaveDto })
    input: PostSaveDtoType,
  ) {
    return this.postSaveUseCase.invoke(input);
  }
}
