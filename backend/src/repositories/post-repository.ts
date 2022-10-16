import { Injectable } from '@nestjs/common';

import { PrismaService } from '@pb-prisma/prisma.service';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async save(postId: string) {
    // TODO: 入力値は仮の値のためdata変数は後日削除予定
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
    // MEMO: DBにpostIdがあれば更新され、なければcreateされる
    const post = await this.prisma.post.upsert({
      where: { id: postId },
      update: data,
      create: {
        id: postId,
        contentPath: '/storage/posts/articles/hello.md2',
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
      },
    });

    return post;
  }
}
