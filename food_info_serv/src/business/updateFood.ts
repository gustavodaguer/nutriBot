import { IFood } from "../interfaces/IFood";
import { FoodRepository } from "../repositories/food";

export class UpdateFood {
  constructor(private repository = new FoodRepository()) { }
  
  async update(food: IFood): Promise<void> {
    await this.repository.update(food);
  }
}