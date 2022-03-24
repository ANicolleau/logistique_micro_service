import {IsNotEmpty, isNotEmpty, IsNumber, IsString} from "class-validator";

import {ApiProperty} from "@nestjs/swagger";

export class SupplySummaryDto {
    @IsNotEmpty()
    @IsNumber()
    nbSupplies: number;

    @IsNotEmpty()
    @IsNumber()
    totalNbProducts: number;

    @IsNotEmpty()
    @IsNumber()
    totalPurchasePrice: number;

    constructor(nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }
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

export class RequiredSupplyDto {
    @IsNotEmpty()
    @IsString()
    productId: string;
}


export class SupplyInputDto {
    @ApiProperty()
    supplyId: string;
    @ApiProperty({type: [SupplyProductDto]})
    products: SupplyProductDto[];
}
