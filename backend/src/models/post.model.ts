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

  public static fromDatabase(record: Record<string, any>): Post {
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

  public static create(record: Record<string, any>): Post {
    return new Post({
      id: null,
      userId: record.userId,
      title: record.title,
      content: record.content,
      publishAt: record.isDraft ? null : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  public update(record: Record<string, any>): Post {
    return new Post({
      id: record.id,
      userId: record.userId,
      title: record.title,
      content: record.content,
      publishAt: record.isDraft ? null : record.publishAt,
      createdAt: record.createdAt,
      updatedAt: new Date(),
      deletedAt: record.deletedAt ?? null,
    });
  }
}
