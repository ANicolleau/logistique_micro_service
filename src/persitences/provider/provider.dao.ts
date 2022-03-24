import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

export class RequiredSupplyDao {
    ean: string;

    constructor(ean: string) {
        this.ean = ean;
    }
}

export class RequiredSupplyToAddDao {
    ean: string;

    constructor(ean: string) {
        this.ean = ean;
    }
}
