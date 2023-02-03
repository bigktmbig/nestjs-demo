import { Injectable } from '@nestjs/common';
import { CreatePaymentGetwayDto } from './dto/create-payment-getway.dto';
import { UpdatePaymentGetwayDto } from './dto/update-payment-getway.dto';

@Injectable()
export class PaymentGetwaysService {
  create(createPaymentGetwayDto: CreatePaymentGetwayDto) {
    return 'This action adds a new paymentGetway';
  }

  findAll() {
    return `This action returns all paymentGetways`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentGetway`;
  }

  update(id: number, updatePaymentGetwayDto: UpdatePaymentGetwayDto) {
    return `This action updates a #${id} paymentGetway`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentGetway`;
  }
}
