import { IFood, IFoodUpdate } from "../interfaces/IFood";
import { FoodRepository } from "../repositories/food";

export class UpdateFood {
  constructor(private repository = new FoodRepository()) { }
  
  async update(name: IFood['name'], body: IFoodUpdate): Promise<void> {
    await this.repository.update(name,body);
  }
}