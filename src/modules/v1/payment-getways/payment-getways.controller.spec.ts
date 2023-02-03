import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGetwaysController } from './payment-getways.controller';
import { PaymentGetwaysService } from './payment-getways.service';

describe('PaymentGetwaysController', () => {
  let controller: PaymentGetwaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentGetwaysController],
      providers: [PaymentGetwaysService],
    }).compile();

    controller = module.get<PaymentGetwaysController>(PaymentGetwaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
