import { Injectable } from '@nestjs/common';

import { PostRepository } from '@pb-repositories/post-repository';
import { PostModel } from '@pb-models/post/posts.model';
import { MutationPostArgsType } from '@pb-models/post/post-mutation-args.model';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を公開する(新規作成または更新)
   */
  async invoke(args: MutationPostArgsType): Promise<PostModel> {
    const post = await this.postRepository.findById(args.id);
    const savePost = post
      ? await this.postRepository.update(args, post)
      : await this.postRepository.create(args);

    return savePost;
  }
}
