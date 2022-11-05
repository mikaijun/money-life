import { Injectable } from '@nestjs/common';

import { PrismaService } from 'library/prisma/prisma.service';
import { Comment } from 'models/comment.model';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<Comment | undefined> {
    const row = await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
    return Comment.fromPrisma(row);
  }
  async findByPostId(postId: number): Promise<Comment[] | undefined> {
    const rows = await this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
    return rows.map((row) => Comment.fromPrisma(row));
  }

  async save(comment: Comment) {
    const data = Comment.toPrisma(comment);
    if (comment.id) {
      const row = await this.prisma.comment.update({
        where: {
          id: comment.id,
        },
        data,
      });
      return Comment.fromPrisma(row);
    } else {
      const row = await this.prisma.comment.create({
        data,
      });
      return Comment.fromPrisma(row);
    }
  }
}
