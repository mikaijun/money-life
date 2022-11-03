import { InputType, Field } from '@nestjs/graphql';

export type CommentSaveDtoType = {
  id: number | null;
  userId: number;
  postId: number;
  content: string;
  deletedAt: Date;
};

@InputType()
export class CommentSaveDto {
  @Field({ nullable: true })
  id: number;
  @Field()
  userId: number;
  @Field()
  postId: number;
  @Field()
  content: string;
  @Field({ nullable: true })
  deletedAt: Date;
}
