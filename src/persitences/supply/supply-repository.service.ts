import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {SupplyDao} from "./supply.dao";


@Injectable()
export class SupplyRepositoryService {
    constructor(
        @InjectRepository(SupplyDao)
        private database: Repository<SupplyDao>
    ) {
    }
}
