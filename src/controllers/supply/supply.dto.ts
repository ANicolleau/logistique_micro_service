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

interface SupplyProductDto {
    ean: string;
    name: string;
    description: string;
    purchasePricePerUnit: number;
    quantity: number;
}


export interface SupplyInputDto {
    supplyId: string;
    products: SupplyProductDto[];
}