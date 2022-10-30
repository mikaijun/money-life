import { InputType, Field } from '@nestjs/graphql';

export type PostMutationDtoType = {
  id: number | null;
  userId: number;
  title: string;
  content: string;
  deletedAt: Date;
  isDraft: boolean;
};

@InputType()
export class PostMutationDto {
  @Field({ nullable: true })
  id: number;
  @Field()
  userId: number;
  @Field()
  title: string;
  @Field()
  content: string;
  @Field({ nullable: true })
  deletedAt: Date;
  @Field({ nullable: true })
  isDraft: boolean;
}
