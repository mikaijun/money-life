import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';

import { PostRepository } from '@src/repositories/post-repository';

@Injectable()
export class PostFindUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 指定したidの投稿を取得
   */
  async invoke(id: number): Promise<Post> {
    const post = await this.postRepository.findById(id);

    return post;
  }
}
