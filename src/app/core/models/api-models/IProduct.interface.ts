export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface IProductDetails extends IProduct {}
export type ICreateProduct = Omit<IProduct, 'id'>;
export interface IUpdateProduct extends Partial<IProduct> {}
