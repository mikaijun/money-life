import { PrismaService } from './../prisma/prisma.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/posts.model';
import { GetPostsArgs } from './interfaces/get-posts-connection.args';

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [PostModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts(@Args() args: GetPostsArgs) {
    return this.prisma.post.findMany({
      where: {
        type: args.type
          ? {
              in: args.type,
            }
          : undefined,
        published: true,
      },
      orderBy: {
        publishDate: 'desc',
      },
    });
  }

  @Mutation(() => PostModel)
  async upvotePost(
    @Args({ name: 'postId', type: () => String }) postId: string,
  ) {
    const data = {
      id: 'fa119cb6-9135-57f5-8a5a-54f28d566d0e',
      contentPath: '/storage/posts/articles/hello.md',
      emoji: '✅',
      excerpt: 'テスト追加',
      md5Hash: '5ce6822c5efacf5791b7f46187451e73',
      title: 'テストタイトル',
      thumbNailUrl: 'http://exaample.com/image1.png',
      type: 'article',
      publishDate: new Date('2022-01-31'),
      published: true,
      like: 0,
      createdAt: new Date('2022-01-31T04:34:22+09:00'),
      updatedAt: new Date('2022-01-31T04:34:22+09:00'),
    };
    const post = await this.prisma.post.upsert({
      where: { id: postId },
      update: data,
      create: data,
    });

    return post;
  }
}
