import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlModuleOptions } from '@nestjs/graphql';
import { PrismaClientOptions } from '@prisma/client/runtime';
import * as path from 'path';

/**
 * アプリケーションモジュールで利用する設定値は、ここから取得します。
 */
@Injectable()
export class EnvService {
  constructor(private configService: ConfigService) {}

  get NodeEnv(): string {
    return this.configService.get('NODE_ENV');
  }

  get Port(): number {
    return this.configService.get('PORT');
  }

  get PrismaOptionsFactory(): PrismaClientOptions {
    const logOptions = {
      development: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
      ],
      production: [{ emit: 'event', level: 'warn' }],
      test: [
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
      ],
    };
    return {
      errorFormat: 'colorless',
      log: logOptions[this.NodeEnv],
    };
  }

  get GqlModuleOptionsFactory(): GqlModuleOptions {
    // 開発：コードからスキーマを生成し、Playgroundも利用する。
    // バックエンドのコードが正なのでコードファーストアプローチを使う
    const devOptions: GqlModuleOptions = {
      autoSchemaFile: path.join(
        process.cwd(),
        'src/generated/graphql/schema.gql',
      ),
      sortSchema: true,
      debug: true,
      playground: true,
    };

    return devOptions;
  }
}
