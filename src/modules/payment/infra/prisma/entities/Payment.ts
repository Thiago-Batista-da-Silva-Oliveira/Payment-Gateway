import { randomUUID } from 'crypto';

export class Payment {
  id?: string;
  userId: string;
  description?: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(data: Payment) {
    if (!this.id) {
      this.id = randomUUID();
    }
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
    if (!this.updatedAt) {
      this.updatedAt = new Date();
    }

    Object.assign(this, { ...data });
  }

  static create(data: Payment) {
    return new Payment(data);
  }
}
