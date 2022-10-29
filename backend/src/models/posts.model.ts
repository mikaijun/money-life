import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { PostInputType } from '@pb-models/post-input.model';

@ObjectType()
export class PostModel {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishAt: Date;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime)
  deletedAt: Date;
}
