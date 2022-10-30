import { Injectable } from '@nestjs/common';

import { PostRepository } from '@src/repositories/post-repository';
import { PostModel } from '@src/models/post/post.model';
import { MutationPostArgsType } from '@src/models/post/post-mutation-args.model';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を保存する
   */
  async invoke(args: MutationPostArgsType): Promise<PostModel> {
    const post = await this.postRepository.findById(args.id);
    const savePost = post
      ? await this.postRepository.update(args, post)
      : await this.postRepository.create(args);

    return savePost;
  }
}
