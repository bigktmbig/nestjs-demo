import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentGetwayDto } from './create-payment-getway.dto';

export class UpdatePaymentGetwayDto extends PartialType(
  CreatePaymentGetwayDto,
) {}
