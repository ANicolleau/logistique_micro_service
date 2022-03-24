import {Injectable} from '@nestjs/common';
import {SupplyRepositoryService,} from "../../persitences/supply/supply-repository.service";
import {RequiredSupply, SupplyProduct, SupplySummary} from "./supply";
import {SupplySummaryRepositoryService} from "../../persitences/supply/supply-summary-repository.service";
import {SupplyToAddDao} from "../../persitences/stock/stock.dao";
import {StockRepositoryService} from "../../persitences/stock/stock-repository.service";
import { ProviderRepositoryService } from 'src/persitences/provider/provider-repository.service';
import { RequiredSupplyToAddDao } from 'src/persitences/provider/provider.dao';
import {CatalogRepositoryService} from "../../persitences/catalog/catalog-repository.service";


@Injectable()
export class SupplyUsecase {

    constructor(private stockRepository: StockRepositoryService,
                private supplyRepositoryService: SupplyRepositoryService,
                private catalogRepository: CatalogRepositoryService,
                private providerRepositoryService: ProviderRepositoryService,
                private supplySummaryRepositoryService: SupplySummaryRepositoryService) {
    }


    public async getSummary(): Promise<SupplySummary> {
        let supplySummary = await this.supplySummaryRepositoryService.get()
        if (!supplySummary) {
            supplySummary = await this.supplySummaryRepositoryService.create()
        }
        return new SupplySummary(supplySummary.nbSupplies, supplySummary.totalNbProducts, supplySummary.totalPurchasePrice)
    }


    public async requiredSupply(requiredSupply: RequiredSupply): Promise<void> {
        const productId = requiredSupply.productId
        const catalogProduct = await this.catalogRepository.getProduct(productId)
        await this.providerRepositoryService.requiredSupply(new RequiredSupplyToAddDao(catalogProduct.ean))
    }

    public async addSupply(products: SupplyProduct[]): Promise<void> {
        let price = 0
        let quantity = 0
        let catalogProducts = await this.catalogRepository.getCatalog()
        for (const product of products) {
            let productId;
            let findProduct: boolean = false;
            for(const catalogProduct of catalogProducts) {
                if(catalogProduct.ean === product.ean) {
                    productId = catalogProduct._id
                    findProduct = true
                    break
                }
            }
            if(findProduct === false) {
                productId = await this.catalogRepository.addProduct({
                    ean: product.ean,
                    name: product.name,
                    description: product.description,
                    categories: [],
                    price: product.purchasePricePerUnit
                })
            }
            await this.stockRepository.addStock(new SupplyToAddDao(productId, product.quantity))
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

