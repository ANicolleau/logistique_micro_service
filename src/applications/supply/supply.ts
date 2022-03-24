export class SupplySummary {
    constructor(nbSupplies: number, totalNbProducts: number, totalPurchasePrice: number) {
        this.nbSupplies = nbSupplies;
        this.totalNbProducts = totalNbProducts;
        this.totalPurchasePrice = totalPurchasePrice;
    }

    nbSupplies: number;
    totalNbProducts: number;
    totalPurchasePrice: number;
}