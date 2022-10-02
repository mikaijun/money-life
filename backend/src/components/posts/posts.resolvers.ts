import { PbEnv } from '@pb-config/environments/pb-env.service';
import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PostsResolver {
  constructor(private configService: ConfigService, private pbEnv: PbEnv) {}

  // @Query(() => [PostsModel], { name: 'posts', nullable: true })
  // async getPosts() {
  //   return [
  //     {
  //       id: '1',
  //       title: 'NestJS is so good.',
  //     },
  //     {
  //       id: '2',
  //       title: 'GraphQL is so good.',
  //     },
  //   ];

  @Query(() => String)
  hello(): string {
    return this.configService.get<string>('DATABASE_URL'); // こっちと比べて
  }

  @Query(() => String)
  helloEnv(): string {
    return this.pbEnv.DatabaseUrl; // かなり直感的になりました。ミスも減りそう
  }
}
