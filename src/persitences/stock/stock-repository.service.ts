import {Injectable} from "@nestjs/common";
import {SupplyToAddDao} from "./stock.dao";
import axios from "axios";

@Injectable()
export class StockRepositoryService {

    public async addStock(supplyToAdd: SupplyToAddDao): Promise<void> {
        const server = 'https://archi-logicielle.herokuapp.com';
        const path: string = '/api/stock/' + supplyToAdd.productId + '/movement';

        await axios.post(server + path, supplyToAdd)
    }
}