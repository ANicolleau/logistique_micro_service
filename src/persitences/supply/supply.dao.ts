import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class SupplyDao {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    product_id: string;

    @Column()
    quantity: number;

    //TODO ajouter le prix ici ou le récuperer dans le catalogue

    constructor(id: string, product_id: string, quantity: number) {
        this.id = id;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}

export class SupplyToAddDao {
    product_id: string;
    quantity: number;


    constructor(product_id: string, quantity: number) {
        this.product_id = product_id;
        this.quantity = quantity;
    }
}
