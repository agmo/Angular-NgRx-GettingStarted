import { Product } from '../product';

/* NgRx */
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail'
}

// Action Creators
export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  // we specify a payload of product to pass in the updated product.
  // We'll pass this product along to the effect to save the updates to the server.
  constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  // Here, we also specify a payload of product.
  // This is the product that is returned from the update operation and
  // used to replace the item in the array of products.
  constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;

  constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail;

