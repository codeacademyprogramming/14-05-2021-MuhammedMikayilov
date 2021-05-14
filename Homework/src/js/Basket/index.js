import {storage} from "../Storage/index.js";
import { STORAGE_KEYS } from '../Storage/consts.js';


class ProductService {
    defaultProduct = []

    constructor(){
        if(!this.removeFromBasket()){
            this.addToBasket(this.defaultProduct);
        }
    }

    addToBasket(product){
        storage.setItem(STORAGE_KEYS.PRODUCT, product);
    }

    removeFromBasket(){
        storage.getItem(STORAGE_KEYS.PRODUCT);
    }
}

export const productService = new ProductService();