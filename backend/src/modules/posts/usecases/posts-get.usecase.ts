import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/posts.model';

@Injectable()
export class PostGetUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 全ての投稿の取得
   */
  async invoke(): Promise<PostModel[]> {
    const posts = await this.postRepository.findAll();

    return posts;
  }
}
