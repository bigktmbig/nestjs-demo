import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DemoModule} from './modules/demo/demo.module';
import {V1Module} from './modules/v1/v1.module';
import {RouterModule} from '@nestjs/core';
import {PaymentGetwaysModule} from "./modules/v1/payment-getways/payment-getways.module";
import {ChatsModule} from "./modules/v1/chats/chats.module";

@Module({
    imports: [
        DemoModule,
        V1Module,
        RouterModule.register([
            {
                path: 'demo',
                module: DemoModule,
            },
            {
                path: 'api/v1',
                module: V1Module,
                children: [
                    {
                        path: 'payment-getways',
                        module: PaymentGetwaysModule,
                    },
                    {
                        path: 'chats',
                        module: ChatsModule,
                    },
                ],
            }
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
