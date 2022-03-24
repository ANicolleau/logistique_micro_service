import {ApiProperty} from "@nestjs/swagger";

export class SupplySummaryDto {
    constructor(nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }

    nbSupplies: number;
    totalNbProducts: number;
    totalPurchasePrice: number;
}

class SupplyProductDto {
    @ApiProperty()
    ean: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    purchasePricePerUnit: number;
    @ApiProperty()
    quantity: number;
}


export class SupplyInputDto {
    @ApiProperty()
    supplyId: string;
    @ApiProperty({type: SupplyProductDto})
    products: SupplyProductDto[];
}
