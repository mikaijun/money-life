import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentDto {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  postId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  content: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt: Date;
}
