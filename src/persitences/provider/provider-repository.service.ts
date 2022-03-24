import {Injectable} from "@nestjs/common";
import {RequiredSupplyDao, RequiredSupplyToAddDao} from "./provider.dao";
import axios from "axios";

@Injectable()
export class ProviderRepositoryService {

    public async requiredSupply(requiredSupplyToAddDao: RequiredSupplyToAddDao): Promise<void> {
        const server = 'https://fhemery-logistics.herokuapp.com/api/supply-request';
        await axios.post(server, {body: new RequiredSupplyDao(requiredSupplyToAddDao.ean)})
    }
}