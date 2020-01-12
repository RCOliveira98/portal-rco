export class Instructor {
    id: number;
    professionalQualification: string;
    experience: string;
    resume: string;

    constructor(i?: Instructor) {
        if (i) {
            this.id = i.id;
            this.professionalQualification = i.professionalQualification;
            this.experience = i.experience;
            this.resume = i.resume;
        }
    }
}