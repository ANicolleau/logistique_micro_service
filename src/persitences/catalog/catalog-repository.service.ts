import {Injectable} from "@nestjs/common";
import {ProductDao} from "./catalog.dao";
import axios from "axios";

@Injectable()
export class CatalogRepositoryService {

    public async getCatalog(): Promise<ProductDao[]> {
        const server = 'https://fhemery-logistics.herokuapp.com';
        const path: string = '/api/products/';

        const result = await axios.get(server + path)
        //@ts-ignore
        return result.data
    }

    public async addProduct(product: ProductDao): Promise<string> {
        const server = 'https://fhemery-logistics.herokuapp.com';
        const path: string = '/api/products/';

        const result = await axios.post(server + path, product)
        //@ts-ignore
        return result.data.id
    }


}