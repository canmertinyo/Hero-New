import { v4 as uuidv4 } from 'uuid';

export class RandomCouponCode {
    generate() {
        return uuidv4();
    }
}