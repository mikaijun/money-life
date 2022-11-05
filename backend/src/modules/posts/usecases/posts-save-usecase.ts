import { Injectable } from '@nestjs/common';

import { PostRepository } from 'repositories/post-repository';
import { PostSaveDtoType } from 'dto/post-save.dto';
import { Post } from 'models/post.model';

@Injectable()
export class PostSaveUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  /**
   * 投稿を保存する
   */
  async invoke(args: PostSaveDtoType): Promise<Post> {
    if (args.id) {
      const post = await this.postRepository.findById(args.id);
      return this.postRepository.save(post.update(args));
    }
    return this.postRepository.save(Post.create(args));
  }
}
