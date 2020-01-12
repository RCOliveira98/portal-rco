export class Address {
    nation: string;
    cep: string;
    state: string;
    district: string;
    publicPlace: string;
    houseNumber: string;
    complement: string;

    constructor(a?: Address) {
        if (a) {
            this.nation = a.nation;
            this.cep = a.cep;
            this.state = a.state;
            this.district = a.district;
            this.publicPlace = a.publicPlace;
            this.houseNumber = a.houseNumber;
            this.complement = a.complement;
        }
    }
}