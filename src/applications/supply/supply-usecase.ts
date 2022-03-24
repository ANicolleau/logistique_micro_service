import {Injectable} from '@nestjs/common';
import {SupplyRepositoryService,} from "../../persitences/supply/supply-repository.service";
import {SupplyProductUseCase, SupplySummary} from "./supply";
import {SupplySummaryRepositoryService} from "../../persitences/supply/supply-summary-repository.service";
import {SupplyToAddDao} from "../../persitences/stock/stock.dao";
import {StockRepositoryService} from "../../persitences/stock/stock-repository.service";


@Injectable()
export class SupplyUsecase {

    constructor(private stockRepository: StockRepositoryService,
                private supplyRepositoryService: SupplyRepositoryService,
                private supplySummaryRepositoryService: SupplySummaryRepositoryService) {
    }


    public async getSummary(): Promise<SupplySummary> {
        const supplySummary = await this.supplySummaryRepositoryService.get()
        return new SupplySummary(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }

    public async addSupply(products: SupplyProductUseCase[]): Promise<void> {
        for (const product of products) {
            // TODO: remplacer ean par l'id du catalogue
            await this.stockRepository.addStock(new SupplyToAddDao(product.ean, product.quantity))
        }
    }
}

