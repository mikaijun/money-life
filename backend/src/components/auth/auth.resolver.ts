import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  @Query(() => String, { name: 'test' })
  async getPostsByPrisma() {
    return 'test';
  }
}
