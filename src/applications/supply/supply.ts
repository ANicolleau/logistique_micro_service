import {Injectable} from "@nestjs/common";
import {SupplyProductUseCase} from "./supply-usecase";
import {StockRepositoryService} from "../../persitences/stock/stock-repository.service";
import {SupplyToAddDao} from "../../persitences/stock/stock.dao";

@Injectable()
export class SupplyService {
    constructor(private stockRepository: StockRepositoryService) {}

    public async addSupply(products: SupplyProductUseCase[]): Promise<void> {
        for (const product of products) {
            // TODO: remplacer ean par l'id du catalogue
            await this.stockRepository.addStock(new SupplyToAddDao(product.ean, product.quantity))
        }
    }
}

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