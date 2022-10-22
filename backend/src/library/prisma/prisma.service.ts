/**
 * Prismaにより取得したデータをGraphQLとしてクエリにするためのService
 * 参考記事; https://zenn.dev/waddy/books/graphql-nestjs-nextjs-bootcamp/viewer/nestjs_configration#prisma
 */
import { Inject, Injectable, OnModuleInit, Optional } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import {
  PrismaServiceOptions,
  PRISMA_SERVICE_OPTIONS,
} from '@pb-library/prisma/prisma-module-options.interface';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'info' | 'query' | 'warn'>
  implements OnModuleInit
{
  constructor(
    @Optional()
    @Inject(PRISMA_SERVICE_OPTIONS)
    private readonly prismaServiceOptions: PrismaServiceOptions = {},
  ) {
    super(prismaServiceOptions.prismaOptions);
  }

  async onModuleInit() {
    await this.$connect();
  }
}
