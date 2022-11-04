/**
 * PrismaClientのインスタンスをNestJSで管理できるようにするためのmodule
 * 参考記事; https://zenn.dev/waddy/books/graphql-nestjs-nextjs-bootcamp/viewer/nestjs_configration#prisma
 * fork元: https://github.com/notiz-dev/nestjs-prisma
 */
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import {
  PrismaModuleAsyncOptions,
  PrismaOptionsFactory,
  PRISMA_SERVICE_OPTIONS,
} from 'library/prisma/prisma-module-options.interface';
import { PrismaService } from 'library/prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {
  static forRootAsync(options: PrismaModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: PrismaModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: PrismaModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return this.createAsyncOptionsProvider(options);
    }

    return [
      ...this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: PrismaModuleAsyncOptions,
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: PRISMA_SERVICE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }
    return [
      {
        provide: PRISMA_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: PrismaOptionsFactory) =>
          await optionsFactory.createPrismaOptions(),
        inject: [options.useExisting || options.useClass],
      },
    ];
  }
}
