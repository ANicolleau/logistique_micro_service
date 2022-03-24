import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SupplySummaryDao, SupplySummaryToAddDao, SupplySummaryToUpdateDao} from "./supply-summary.dao";


@Injectable()
export class SupplySummaryRepositoryService {
    constructor(
        @InjectRepository(SupplySummaryDao)
        private database: Repository<SupplySummaryDao>
    ) {
    }

    public async get(): Promise<SupplySummaryDao> {
        return await this.database.findOne(); //TODO BDD
    }

    public async create(): Promise<SupplySummaryDao> {
        return await this.database.save(new SupplySummaryToAddDao(0, 0, 0));
    }

    public async update(supplySummaryToUpdateDao: SupplySummaryToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(), supplySummaryToUpdateDao)
    }
}
