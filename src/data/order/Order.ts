export interface Order {
    id: number;
    order_emission_date: number;
    order_expiration_date: number;
    order_completion_date: number;
    status: OrderStatus;
    payment: PaymentStatus;
    worker: string;
    client: string;
}

export enum OrderStatus {
    UNKOWN,
    SHIPPED,
    SHIPPING,
    UNFILLED
}

export enum PaymentStatus {
    UNKOWN,
    PAID,
    UNPAID
}