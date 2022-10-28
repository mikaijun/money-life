import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/posts.model';

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
