import { Injectable } from '@nestjs/common';

import { PostRepository } from '@src/repositories/post-repository';
import { Post } from '@prisma/client';

@Injectable()
export class PostFindAllUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 全ての投稿の取得
   */
  async invoke(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();

    return posts;
  }
}
