import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { CommentRepository } from 'repositories/comment-repository';

@Injectable()
export class CommentFindByPostIdUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  /**
   * 指定した投稿idのコメントを全て取得
   */
  async invoke(id: number): Promise<Comment[] | undefined> {
    const comments = await this.commentRepository.findByPostId(id);

    return comments;
  }
}
