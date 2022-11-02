import { Injectable } from '@nestjs/common';
import { PostDto } from '@src/dto/post.dto';

import { PostRepository } from '@src/repositories/post-repository';

@Injectable()
export class PostFindUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 指定したidの投稿を取得
   */
  async invoke(id: number): Promise<PostDto> {
    const post = await this.postRepository.findById(id);

    return post;
  }
}
