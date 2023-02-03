import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getGreeting(): string {
    return 'Hi guy !!!';
  }
}
