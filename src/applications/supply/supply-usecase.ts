import {Injectable} from '@nestjs/common';
import {SupplyRepositoryService,} from "../../persitences/supply/supply-repository.service";
import {SupplySummary} from "./supply";
import {SupplySummaryRepositoryService} from "../../persitences/supply/supply-summary-repository.service";


@Injectable()
export class SupplyUsecase {

    constructor(private supplyRepositoryService: SupplyRepositoryService, private supplySummaryRepositoryService: SupplySummaryRepositoryService) {
    }

    public async getSummary(): Promise<SupplySummary> {
        const supplySummary = await this.supplySummaryRepositoryService.get()
        return new SupplySummary(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }
}
