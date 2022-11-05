import { Injectable } from '@nestjs/common';

import { PrismaService } from 'library/prisma/prisma.service';
import { Post } from 'models/post.model';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const rows = await this.prisma.post.findMany();
    return rows.map((row) => Post.fromDatabase(row));
  }

  async findById(id: number): Promise<Post> {
    if (!id) return null;
    const row = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });
    return Post.fromDatabase(row);
  }

  async save(post: Post): Promise<Post> {
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
      const row = await this.prisma.post.update({
        where: {
          id: post.id,
        },
        data,
      });
      return Post.fromDatabase(row);
    } else {
      const row = await this.prisma.post.create({
        data,
      });
      return Post.fromDatabase(row);
    }
  }
}
