import { Address } from './address.model';
import { StudentModel } from './student.model';
import { Instructor } from './instructor.model';

export class User {
    name: string;
    email: string;
    password: string;
    address: Address;
    kind: number;
    person: StudentModel | Instructor;

    constructor(user?: User) {
        if (!user) {
            this.address = new Address();
        } else {
            this.name = user.name;
            this.email = user.email;
            this.password = user.email;
            this.address = user.address;
            this.kind = user.kind;
            this.person = user.person;
        }
    }
}