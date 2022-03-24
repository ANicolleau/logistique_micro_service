import {Body, Controller, HttpCode, Post, Get} from "@nestjs/common";
import {SupplyUsecase} from "../../applications/supply/supply-usecase";
import {ApiResponse} from "@nestjs/swagger";
import {SupplyInputDto, SupplySummaryDto} from "./supply.dto";
import {SupplyProduct} from "../../applications/supply/supply";


@Controller('api/supply')
export class SupplyController {
    constructor(private supplyUsecase: SupplyUsecase) {
    }

    @Get('summary')
    @ApiResponse({status: 200, description: 'Get summary of all supplies'})
    public async getSummary(): Promise<SupplySummaryDto> {
        const supplySummary = await this.supplyUsecase.getSummary()
        return new SupplySummaryDto(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }

    @Post()
    @HttpCode(204)
    @ApiResponse({status: 204, description: 'Add a new supply to the stock'})
    public async addSupply(@Body() supply: SupplyInputDto) {
        const products: SupplyProduct[] = [];
        for (const product of supply.products) {
            products.push({
                ean: product.ean,
                quantity: product.quantity,
                description: product.description,
                name: product.name,
                purchasePricePerUnit: product.purchasePricePerUnit
            });
        }

        await this.supplyUsecase.addSupply(products);
        return ;
    }
}
