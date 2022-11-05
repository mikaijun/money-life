import { Comment as PrismaComment } from '@prisma/client';
import { CommentSaveDtoType } from 'dto/comment-save.dto';

export class Comment {
  public readonly id!: number;
  public readonly postId!: number;
  public readonly userId!: number;
  public readonly content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date | null;
  public readonly deletedAt!: Date | null;

  constructor(
    record: Pick<
      Comment,
      | 'id'
      | 'postId'
      | 'userId'
      | 'content'
      | 'createdAt'
      | 'updatedAt'
      | 'deletedAt'
    >,
  ) {
    Object.assign(this, record);
  }

  public static fromPrisma(record: PrismaComment): Comment {
    return new Comment({
      id: record.id,
      postId: record.postId,
      userId: record.userId,
      content: record.content,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      deletedAt: record.deletedAt,
    });
  }

  public static toPrisma(
    comment: Comment,
  ): Pick<
    Comment,
    'userId' | 'postId' | 'content' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > {
    const data = {
      userId: comment.userId,
      postId: comment.postId,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      deletedAt: comment.deletedAt,
    };
    return data;
  }

  public static create(data: CommentSaveDtoType): Comment {
    return new Comment({
      id: null,
      postId: data.postId,
      userId: data.userId,
      content: data.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  public update(data: CommentSaveDtoType): Comment {
    return new Comment({
      id: data.id,
      postId: data.postId,
      userId: data.userId,
      content: data.content,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      deletedAt: data.deletedAt,
    });
  }
}
