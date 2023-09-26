import { ERROR_MESSAGES } from "../constants/errorMessages";
import { NotFoundError } from "../exceptions/exceptions";
import { IFoodParams } from "../interfaces/IFood";
import { FoodRepository } from "../repositories/food";

export class GetFoods {
  constructor(private repository = new FoodRepository()) { }
  
  async getAll() {
    const response = await this.repository.getAll();
    return response.map(v => ({name: v.name, quantity: v.quantity || 0, unity: v.unity || 'unidade'}));
  }

  async getByName({name}: IFoodParams) {
    const response = await this.repository.getByName(name);

    if (!response) {
      throw new NotFoundError(ERROR_MESSAGES.NOT_FOUND_FOOD)
    }
    
    return response;
  }
}