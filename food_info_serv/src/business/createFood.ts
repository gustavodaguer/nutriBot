import { IFood } from "../interfaces/IFood";
import { FoodRepository } from "../repositories/food";

export class CreateFood {
  constructor(private repository = new FoodRepository()) { }
  
  async create(food: IFood): Promise<void> {
    await this.repository.create(food);
  }
}