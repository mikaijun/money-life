import { Injectable } from '@nestjs/common';

import { PrismaService } from 'library/prisma/prisma.service';
import { Post } from 'models/post.model';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const rows = await this.prisma.post.findMany();
    return rows.map((row) => Post.fromPrisma(row));
  }

  async findById(id: number): Promise<Post | undefined> {
    const row = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });
    // TODO: いずれはエラーハンドリングしたい
    if (!row) undefined;
    return Post.fromPrisma(row);
  }

  async save(post: Post): Promise<Post> {
    const data = Post.toPrisma(post);
    if (post.id) {
      const row = await this.prisma.post.update({
        where: {
          id: post.id,
        },
        data,
      });
      return Post.fromPrisma(row);
    } else {
      const row = await this.prisma.post.create({
        data,
      });
      return Post.fromPrisma(row);
    }
  }
}
