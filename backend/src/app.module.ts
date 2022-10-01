import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PaymentsModule } from './components/payments/payments.module';
import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PaymentsModule,
  ],
})
export class AppModule {}
