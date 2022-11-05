import { Injectable } from '@nestjs/common';

import { Comment } from 'models/comment.model';
import { CommentRepository } from 'repositories/comment-repository';
import { CommentSaveDtoType } from 'dto/comment-save.dto';

@Injectable()
export class CommentSaveUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  /**
   * コメントを投稿する
   */
  async invoke(args: CommentSaveDtoType): Promise<Comment> {
    if (args.id) {
      const comment = await this.commentRepository.findById(args.id);
      return await this.commentRepository.save(comment);
    }

    return await this.commentRepository.save(Comment.create(args));
  }
}
