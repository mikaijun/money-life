import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/posts.model';
import { PostInputType } from '@pb-models/post-input.model';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を公開する(新規作成または更新)
   */
  async invoke(input: PostInputType): Promise<PostModel> {
    const post = await this.postRepository.findById(input.id);
    const savePost = post
      ? await this.postRepository.update(input, post)
      : await this.postRepository.create(input);

    return savePost;
  }
}
