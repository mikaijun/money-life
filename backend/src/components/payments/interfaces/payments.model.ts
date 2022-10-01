import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentsModel {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  title: string;
}
