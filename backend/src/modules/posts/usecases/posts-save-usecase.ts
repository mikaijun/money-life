import { Injectable } from '@nestjs/common';

import { PostRepository } from '@src/repositories/post-repository';
import { PostMutationDtoType } from '@src/dto/post-mutation.dto';
import { Post } from '@prisma/client';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を保存する
   */
  async invoke(args: PostMutationDtoType): Promise<Post> {
    const post = await this.postRepository.findById(args.id);
    const savePost = post
      ? await this.postRepository.update(args, post)
      : await this.postRepository.create(args);

    return savePost;
  }
}
