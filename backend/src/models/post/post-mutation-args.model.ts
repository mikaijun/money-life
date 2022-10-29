import { InputType, Field } from '@nestjs/graphql';

export type MutationPostArgsType = {
  id: number | null;
  userId: number;
  title: string;
  content: string;
  deletedAt: Date;
  isDraft: boolean;
};

@InputType()
export class MutationPostArgs {
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
