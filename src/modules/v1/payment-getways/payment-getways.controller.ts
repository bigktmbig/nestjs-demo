import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentGetwaysService } from './payment-getways.service';
import { CreatePaymentGetwayDto } from './dto/create-payment-getway.dto';
import { UpdatePaymentGetwayDto } from './dto/update-payment-getway.dto';

@Controller()
export class PaymentGetwaysController {
  constructor(private readonly paymentGetwaysService: PaymentGetwaysService) {}

  @Post()
  create(@Body() createPaymentGetwayDto: CreatePaymentGetwayDto) {
    return this.paymentGetwaysService.create(createPaymentGetwayDto);
  }

  @Get()
  findAll() {
    return this.paymentGetwaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentGetwaysService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentGetwayDto: UpdatePaymentGetwayDto,
  ) {
    return this.paymentGetwaysService.update(+id, updatePaymentGetwayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentGetwaysService.remove(+id);
  }
}
