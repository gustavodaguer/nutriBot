export interface IFood {
  name: string;
  details?: Record<string,unknown>
}
export interface IFoodParams {
  name: IFood['name'];
}