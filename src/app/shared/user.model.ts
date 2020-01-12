import { Addrress } from './address.model';

export class User {
    name: string;
    email: string;
    password: string;
    address: Addrress;
    kind: any;

    constructor(user?: User) {
        if (!user) {
            this.address = new Addrress();
        } else {
            this.name = user.name;
            this.email = user.email;
            this.password = user.email;
            this.address = user.address;
            this.kind = user.kind;
        }
    }
}