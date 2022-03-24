import {Injectable} from "@nestjs/common";
import {SupplyToAddDao} from "./stock.dao";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class StockRepositoryService {
    constructor(private httpService: HttpService) {}

    public async addStock(supplyToAdd: SupplyToAddDao): Promise<void> {
        const server = 'https://archi-logicielle.herokuapp.com';
        const path: string = '/api/stock/' + supplyToAdd.productId + '/movement';

        await this.httpService.post(server + path, {body: supplyToAdd})
        // TODO: vérifier que la réponse est bien 204 sinon erreur
    }
}