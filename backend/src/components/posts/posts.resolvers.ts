import { PbEnv } from '@pb-config/environments/pb-env.service';
import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '@pb-components/prisma/prisma.service';
import { PostsModel } from './interfaces/posts.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  // @Query(() => [PostsModel], { name: 'posts', nullable: true })
  // async getPosts() {
  //   return [
  //     {
  //       id: '1',
  //       title: 'NestJS is so good.',
  //     },
  //     {
  //       id: '2',
  //       title: 'GraphQL is so good.',
  //     },
  //   ];

  @Query(() => [PostsModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }
}
