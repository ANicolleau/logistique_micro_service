import {Controller, Get} from "@nestjs/common";
import {SupplySummaryDto} from "./supply.dto";
import {SupplyUsecase} from "../../applications/supply/supply-usecase";


@Controller('supply')
export class SupplyController {
    constructor(private supplyUsecase: SupplyUsecase) {
    }

    @Get('summary')
    public async getSummary(): Promise<SupplySummaryDto> {
        const supplySummary = await this.supplyUsecase.getSummary()
        return new SupplySummaryDto(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }
}