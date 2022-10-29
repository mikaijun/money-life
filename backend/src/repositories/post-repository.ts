import { Post } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@pb-library/prisma/prisma.service';
import { MutationPostArgsType } from '@pb-models/post/post-mutation-args.model';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findById(id: number) {
    if (!id) return null;
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async create(args: MutationPostArgsType) {
    const createPost = await this.prisma.post.create({
      data: {
        userId: args.userId,
        title: args.title,
        content: args.content,
        publishAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    });

    return createPost;
  }

  async update(args: MutationPostArgsType, post: Post) {
    const updatePost = await this.prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        userId: args.userId,
        title: args.title,
        content: args.content,
        publishAt: post.publishAt,
        createdAt: post.createdAt,
        updatedAt: new Date(),
        deletedAt: null,
      },
    });

    return updatePost;
  }
}
