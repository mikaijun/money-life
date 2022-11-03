import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';

import { PrismaService } from '@src/library/prisma/prisma.service';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number) {
    if (!id) return null;
    return this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }
  async findByPostId(postId: number) {
    if (!postId) return null;
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }

  async save(comment: Comment) {
    const data = {
      userId: comment.userId,
      postId: comment.postId,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      deletedAt: comment.deletedAt,
    };
    if (comment.id) {
      return await this.prisma.comment.update({
        where: {
          id: comment.id,
        },
        data,
      });
    } else {
      return await this.prisma.comment.create({
        data,
      });
    }
  }
}
