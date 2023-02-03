import {Module} from '@nestjs/common';
import {ChatsModule} from './chats/chats.module';
import {PaymentGetwaysModule} from './payment-getways/payment-getways.module';
import { V1Controller } from './v1.controller';


@Module({
    imports: [
        // Router v1 children
        ChatsModule,
        PaymentGetwaysModule,
    ],
    controllers: [V1Controller],
})
export class V1Module {
}
