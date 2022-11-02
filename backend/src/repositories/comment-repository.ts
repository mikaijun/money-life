import { Injectable } from '@nestjs/common';

import { PrismaService } from '@src/library/prisma/prisma.service';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByPostId(postId: number) {
    if (!postId) return null;
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }
}
