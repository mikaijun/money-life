import { Injectable } from '@nestjs/common';

import { Post } from 'models/post.model';
import { PostRepository } from 'repositories/post-repository';

@Injectable()
export class PostFindByIdUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 指定したidの投稿を取得
   */
  async invoke(id: number): Promise<Post> {
    const post = await this.postRepository.findById(id);

    return post;
  }
}
