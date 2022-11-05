import { Injectable } from '@nestjs/common';

import { Post } from 'models/post.model';
import { PostRepository } from 'repositories/post-repository';

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
