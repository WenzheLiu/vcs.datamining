import { Action } from '@ngrx/store';
import { Product } from '../model/product';

export const LOAD = '[Product] Load';
export const LOAD_SUCCESS = '[Product] Load Success';
export const LOAD_FAIL = '[Product] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Product[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}
