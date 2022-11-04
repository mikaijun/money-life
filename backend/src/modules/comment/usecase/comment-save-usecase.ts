import { Injectable } from '@nestjs/common';

import { Comment } from '@prisma/client';
import { CommentRepository } from 'repositories/comment-repository';
import { CommentSaveDtoType } from 'dto/comment-save.dto';

@Injectable()
export class CommentSaveUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  /**
   * コメントを投稿する
   */
  async invoke(args: CommentSaveDtoType): Promise<Comment> {
    const comment = await this.commentRepository.findById(args.id);
    const formatComment: Comment = {
      id: args.id,
      userId: args.userId,
      postId: args.postId,
      content: args.content,
      // insertの時のみ現在時刻を定義する
      createdAt: comment?.createdAt ?? new Date(),
      updatedAt: new Date(),
      deletedAt: args.deletedAt ?? null,
    };
    const saveComment = await this.commentRepository.save(formatComment);

    return saveComment;
  }
}
