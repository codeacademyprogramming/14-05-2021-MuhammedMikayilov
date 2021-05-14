import {HttpClient} from "./HttpClient/index.js"

class ProductApi extends HttpClient {

    constructor(){
        super('https://isko88.github.io')
    }

    getProductList(){
        return this.get('apipizza.json')
    }

}   


export const productList = new ProductApi();