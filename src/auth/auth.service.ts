import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  demo() {
    return { auth: 'signing' };
  }
}
