import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PingController} from "./controllers/ping/ping.controller";
import {SupplySummaryRepositoryService} from "./persitences/supply/supply-summary-repository.service";
import {SupplyUsecase} from "./applications/supply/supply-usecase";
import {SupplyRepositoryService} from "./persitences/supply/supply-repository.service";
import {SupplyDao} from "./persitences/supply/supply.dao";
import {SupplySummaryDao} from "./persitences/supply/supply-summary.dao";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StockRepositoryService} from "./persitences/stock/stock-repository.service";
import {SupplyController} from "./controllers/supply/supply.controller";
import {CatalogRepositoryService} from "./persitences/catalog/catalog-repository.service";
import {ProviderRepositoryService} from "./persitences/provider/provider-repository.service";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'cours-architecture-db.florianlafuente.com',
        port: 12345,
        username: 'admin',
        password: 'Passw0rd',
        database: 'test',
        entities: [
            SupplySummaryDao,
            SupplyDao
        ],
        synchronize: true,
    }),
        TypeOrmModule.forFeature([SupplySummaryDao, SupplyDao])],
    controllers: [AppController, PingController, SupplyController],
    providers: [AppService, SupplyUsecase, SupplySummaryRepositoryService, SupplyRepositoryService, StockRepositoryService, CatalogRepositoryService, ProviderRepositoryService],
})
export class AppModule {
}