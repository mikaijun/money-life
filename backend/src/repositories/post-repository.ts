import { Post } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/library/prisma/prisma.service';

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

  async save(post: Post) {
    const data = {
      userId: post.userId,
      title: post.title,
      content: post.content,
      publishAt: post.publishAt,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      deletedAt: post.deletedAt,
    };
    if (post.id) {
      return await this.prisma.post.update({
        where: {
          id: post.id,
        },
        data,
      });
    } else {
      return await this.prisma.post.create({
        data,
      });
    }
  }
}
