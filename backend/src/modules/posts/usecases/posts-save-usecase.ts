import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/posts.model';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 1つの投稿を作成または更新を行う
   */
  async invoke(postId: string): Promise<PostModel> {
    const post = await this.postRepository.save(postId);

    return post;
  }
}
