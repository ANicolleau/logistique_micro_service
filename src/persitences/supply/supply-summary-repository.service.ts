import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SupplySummaryDao} from "./supply-summary.dao";


@Injectable()
export class SupplySummaryRepositoryService {
    constructor(
        @InjectRepository(SupplySummaryDao)
        private database: Repository<SupplySummaryDao>
    ) {
    }

    public async get(): Promise<SupplySummaryDao> {
        return new SupplySummaryDao("1", 10, 10, 10)
        // return this.database.find(); TODO BDD
    }
}
