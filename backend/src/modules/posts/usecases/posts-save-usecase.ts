import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/posts.model';
import { PostInputType } from '@pb-models/post-input.model';

@Injectable()
export class PostSaveUseCase {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postModel: PostModel,
  ) {}

  /**
   * 1つの投稿を作成または更新を行う
   */
  async invoke(input: PostInputType): Promise<PostModel> {
    const post = await this.postRepository.findById(input.id);
    const post2 = this.postModel.fromDatabase(post);
    const post3 = await this.postRepository.save(input);

    return post;
  }
}
