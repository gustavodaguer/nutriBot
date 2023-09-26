import { ERROR_MESSAGES } from "../constants/errorMessages";
import { PersonModel } from "../entities/person";
import { InternalServerError } from "../exceptions/exceptions";
import { IPersonParams } from "../interfaces/IPerson";
import { logger } from "../libs/logger";
import { IPerson } from './../interfaces/IPerson';
import { MongoRepository } from "./mongo";

export class PersonRepository extends MongoRepository {
  constructor(private Model = PersonModel) { 
    super()
  }

  async create(person: IPerson): Promise<void> {
    try {
      await this.open();
      const model = new this.Model(person);
      await model.save();
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_SAVE)
    } finally {
      await this.close();
    }
  }

  async getAll(): Promise<Array<IPerson>> {
    try {
      await this.open();
      const response = await this.Model.find({},{__v: 0});
      return response.map(v => v['_doc' as keyof IPerson] as unknown as IPerson);
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_GET)
    } finally {
      await this.close();
    }
  }

  async getById({_id}: IPersonParams): Promise<IPerson> {
    try {
      await this.open();
      const response = await this.Model.findOne({ _id },{__v: 0});
      return response['_doc' as keyof IPerson] as unknown as IPerson;
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_GET)
    } finally {
      await this.close();
    }
  }

  async update(person: Partial<IPerson> & { _id: IPerson['_id']}): Promise<void> {
    try {
      await this.open();
      await this.Model.updateOne({name: person._id}, person);
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_UPDATE)
    } finally {
      await this.close();
    }
  }

  async delete({_id}: IPersonParams): Promise<void> {
    try {
      await this.open();
      await this.Model.deleteOne({_id});
    } catch (error) {
      logger.error(error.message);
      throw new InternalServerError(ERROR_MESSAGES.CANT_DELETE)
    } finally {
      await this.close();
    }
  }
}