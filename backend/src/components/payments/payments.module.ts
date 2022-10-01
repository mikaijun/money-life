import { Module } from '@nestjs/common';
import { PaymentsResolver } from './payments.resolvers';

@Module({
  providers: [PaymentsResolver],
})
export class PaymentsModule {}
