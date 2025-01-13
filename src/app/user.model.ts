import { Policy } from "./policy.model";

export class User {
    customerId: string ="";
    password: string ="";
    name: string ="";
    policy :Policy = new Policy();
 };
