export interface IFood {
  name: string;
  quantity: number;
  details?: Record<string,unknown>
  unity: string;
}
export interface IFoodParams {
  name: IFood['name'];
}
export interface IFoodUpdate {
  details: IFood['details'];
  quantity: IFood['quantity'];
  unity: IFood['unity'];
}