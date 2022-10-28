import { Injectable } from '@nestjs/common';

import { PrismaService } from '@pb-library/prisma/prisma.service';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async save(postId: number) {
    // TODO: 入力値は仮の値のためdata変数は後日削除予定
    const data = {
      id: 4,
      userId: 1,
      title: 'タイトル4',
      content: '内容4',
      publishAt: new Date(),
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null,
    };
    // MEMO: DBにpostIdがあれば更新され、なければcreateされる
    const post = await this.prisma.post.upsert({
      where: { id: postId },
      update: data,
      create: {
        id: 4,
        userId: 1,
        title: 'タイトル4',
        content: '内容4',
        publishAt: new Date(),
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
      },
    });

    return post;
  }
}
