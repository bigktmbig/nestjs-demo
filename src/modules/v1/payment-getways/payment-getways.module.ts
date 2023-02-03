import { Module } from '@nestjs/common';
import { PaymentGetwaysService } from './payment-getways.service';
import { PaymentGetwaysController } from './payment-getways.controller';

@Module({
  controllers: [PaymentGetwaysController],
  providers: [PaymentGetwaysService],
})
export class PaymentGetwaysModule {}
