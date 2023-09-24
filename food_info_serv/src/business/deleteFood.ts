import { IFoodParams } from "../interfaces/IFood";
import { FoodRepository } from "../repositories/food";

export class DeleteFood {
  constructor(private repository = new FoodRepository()) { }
  
  async delete({ name }: IFoodParams) {
    await this.repository.delete(name);
  }
}