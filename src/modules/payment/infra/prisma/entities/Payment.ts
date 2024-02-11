import { randomUUID } from 'crypto';

export class Payment {
  id?: string;
  userId: string;
  description?: string;
  price: number;
  status?: "PENDING" | "APPROVED" | "CANCELLED";
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

    if (!this.status) {
      this.status = "PENDING";
    }

    Object.assign(this, { ...data });
  }

  static create(data: Payment) {
    return new Payment(data);
  }
}
