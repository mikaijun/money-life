import { Post as PrismaPost } from '@prisma/client';
import { PostSaveDtoType } from 'dto/post-save.dto';

export class Post {
  public readonly id!: number;
  public readonly userId!: number;
  public readonly title!: string;
  public readonly content!: string;
  public readonly publishAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date | null;
  public readonly deletedAt!: Date | null;

  constructor(record: Record<string, any>) {
    Object.assign(this, record);
  }

  public static fromPrisma(record: PrismaPost): Post {
    return new Post({
      id: record.id,
      userId: record.userId,
      title: record.title,
      content: record.content,
      publishAt: record.publishAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      deletedAt: record.deletedAt,
    });
  }

  public static create(data: PostSaveDtoType): Post {
    return new Post({
      id: null,
      userId: data.userId,
      title: data.title,
      content: data.content,
      publishAt: data.isDraft ? null : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  public update(data: PostSaveDtoType): Post {
    return new Post({
      id: data.id,
      userId: data.userId,
      title: data.title,
      content: data.content,
      publishAt: data.isDraft ? null : this.publishAt,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      deletedAt: data.deletedAt ?? null,
    });
  }
}
