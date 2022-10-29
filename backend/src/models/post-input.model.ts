import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PostInput {
  @Field()
  id: number | null;
  @Field()
  userId: number;
  @Field()
  title: string;
  @Field()
  content: string;
}

export type PostInputType = {
  id: number | null;
  userId: number;
  title: string;
  content: string;
};
