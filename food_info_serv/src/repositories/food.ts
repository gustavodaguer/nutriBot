import { ERROR_MESSAGES } from "../constants/errorMessages";
import { FoodModel } from "../entities/food";
import { InternalServerError } from "../exceptions/exceptions";
import { IFood } from "../interfaces/IFood";
import { logger } from "../libs/logger";
import { MongoRepository } from "./mongo";

export class FoodRepository extends MongoRepository {
  constructor(private Model = FoodModel) { 
    super()
  }

  async create(food: IFood): Promise<void> {
    try {
      await this.open();
      const model = new this.Model(food);
      await model.save();
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_SAVE)
    } finally {
      await this.close();
    }
  }

  async getAll(): Promise<Array<IFood>> {
    try {
      await this.open();
      const response = await this.Model.find({},{__v: 0});
      return response;
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_GET)
    } finally {
      await this.close();
    }
  }

  async getByName(name: IFood['name']): Promise<IFood> {
    try {
      await this.open();
      const response = await this.Model.findOne({ name },{__v: 0});
      return response as IFood;
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_GET)
    } finally {
      await this.close();
    }
  }

  async update(food: IFood): Promise<void> {
    try {
      await this.open();
      await this.Model.updateOne({name: food.name}, {details: food.details});
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_UPDATE)
    } finally {
      await this.close();
    }
  }

  async delete(name: IFood['name']): Promise<void> {
    try {
      await this.open();
      await this.Model.deleteOne({name});
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_DELETE)
    } finally {
      await this.close();
    }
  }
}