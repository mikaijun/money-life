import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostsModel } from './interfaces/posts.model';

@Resolver((of) => PostsModel)
export class PostsResolver {
  constructor() {}

  @Query(() => [PostsModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
