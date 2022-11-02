import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PostFindUseCase } from '../usecases/post-find.usecase';
import { PostDto } from '@src/dto/post.dto';
import {
  PostMutationDto,
  PostMutationDtoType,
} from '@src/dto/post-mutation.dto';
import { PostGetUseCase } from '../usecases/posts-get.usecase';
import { PostSaveUseCase } from '../usecases/posts-save-usecase';

@Resolver(() => PostDto)
export class PostsResolver {
  constructor(
    private readonly postFindUseCase: PostFindUseCase,
    private readonly postGetUseCase: PostGetUseCase,
    private readonly postSaveUseCase: PostSaveUseCase,
  ) {}

  @Query(() => [PostDto], { name: 'posts', nullable: true })
  async findAll() {
    return this.postGetUseCase.invoke();
  }

  @Query(() => PostDto, { name: 'post', nullable: true })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.postFindUseCase.invoke(id);
  }

  @Mutation(() => PostDto)
  async save(
    @Args({ name: 'input', type: () => PostMutationDto })
    input: PostMutationDtoType,
  ) {
    return this.postSaveUseCase.invoke(input);
  }
}
