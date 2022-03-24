import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class SupplySummaryDao {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nbSupplies: number;

    @Column()
    totalNbProducts: number;

    @Column()
    totalPurchasePrice: number;

    constructor(id: string, nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.id = id;
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }
}


@Entity()
export class SupplySummaryToAddDao {
    @Column()
    nbSupplies: number;

    @Column()
    totalNbProducts: number;

    @Column()
    totalPurchasePrice: number;

    constructor(nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }
}

export class SupplySummaryToUpdateDao {
    nbSupplies: number;

    totalNbProducts: number;

    totalPurchasePrice: number;

    constructor(nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }
}
