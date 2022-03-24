import {Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {RequiredSupplyDto, SupplyInputDto, SupplySummaryDto} from "./supply.dto";
import {SupplyUsecase} from "../../applications/supply/supply-usecase";
import {ApiResponse} from "@nestjs/swagger";
import {RequiredSupply, SupplyProduct} from "../../applications/supply/supply";


@Controller('api')
export class SupplyController {
    constructor(private supplyUsecase: SupplyUsecase) {
    }

    @Get('supply/summary')
    @ApiResponse({status: 200, description: 'Get summary of all supplies'})
    public async getSummary(): Promise<SupplySummaryDto> {
        const supplySummary = await this.supplyUsecase.getSummary()
        return new SupplySummaryDto(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }

    @Post('supply')
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
        return;
    }

    @Post('supply-needed')
    @HttpCode(204)
    @ApiResponse({status: 500, description: 'Not working but should return a required Supply'})
    public async requiredSupply(@Body() requiredSupply: RequiredSupplyDto) {
        await this.supplyUsecase.requiredSupply(new RequiredSupply(requiredSupply.productId));
        return;
    }
}
