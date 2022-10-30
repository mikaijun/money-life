import { Injectable } from '@nestjs/common';

import { PostRepository } from '@src/repositories/post-repository';
import { PostModel } from '@src/models/post/posts.model';

@Injectable()
export class PostFindUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 指定したidの投稿を取得
   */
  async invoke(id: number): Promise<PostModel> {
    const post = await this.postRepository.findById(id);

    return post;
  }
}
