import { Product } from '../model/product';

export interface StoreData {
    products: {[key: number]: Product};
}

export const INITIAL_STORE_DATA: StoreData = {
    products: {}
};
