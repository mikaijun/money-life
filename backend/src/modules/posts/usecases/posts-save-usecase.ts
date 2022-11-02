import { Injectable } from '@nestjs/common';

import { PostDto } from '@src/dto/post.dto';
import { PostRepository } from '@src/repositories/post-repository';
import { PostMutationDtoType } from '@src/dto/post-mutation.dto';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を保存する
   */
  async invoke(args: PostMutationDtoType): Promise<PostDto> {
    const post = await this.postRepository.findById(args.id);
    const savePost = post
      ? await this.postRepository.update(args, post)
      : await this.postRepository.create(args);

    return savePost;
  }
}
