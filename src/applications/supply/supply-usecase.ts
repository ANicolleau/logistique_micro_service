import {Injectable} from '@nestjs/common';
import {SupplyRepositoryService,} from "../../persitences/supply/supply-repository.service";
import {SupplyProduct, SupplySummary} from "./supply";
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
        let supplySummary = await this.supplySummaryRepositoryService.get()
        if (!supplySummary) {
            supplySummary = await this.supplySummaryRepositoryService.create()
        }
        return new SupplySummary(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }

    public async addSupply(products: SupplyProduct[]): Promise<void> {
        let price = 0
        let quantity = 0
        for (const product of products) {
            // TODO: remplacer ean par l'id du catalogue
            await this.stockRepository.addStock(new SupplyToAddDao(product.ean, product.quantity))
            price += product.quantity * product.purchasePricePerUnit;
            quantity += product.quantity;
        }
        const supplySummary = await this.supplySummaryRepositoryService.get()
        supplySummary.nbSupplies += 1
        supplySummary.totalPurchasePrice += price
        supplySummary.totalNbProducts += quantity
        await this.supplySummaryRepositoryService.update(supplySummary)
    }

    public async updateSummary(supplySummary: SupplySummary): Promise<void> {
        await this.supplySummaryRepositoryService.update(supplySummary)
    }
}

