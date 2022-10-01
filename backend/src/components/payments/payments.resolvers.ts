import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaymentsModel } from './interfaces/payments.model';

@Resolver((of) => PaymentsModel)
export class PaymentsResolver {
  constructor() {}

  @Query(() => [PaymentsModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
