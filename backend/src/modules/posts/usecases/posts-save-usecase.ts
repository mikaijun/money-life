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
    const formatPost: Post = {
      id: args.id,
      userId: args.userId,
      title: args.title,
      content: args.content,
      // 初めて記事を公開した時現在時刻を定義する
      publishAt: args.isDraft ? null : post?.publishAt ?? new Date(),
      // insertの時のみ現在時刻を定義する
      createdAt: post?.createdAt ?? new Date(),
      updatedAt: new Date(),
      deletedAt: args.deletedAt ?? null,
    };
    const savePost = await this.postRepository.save(formatPost);

    return savePost;
  }
}
