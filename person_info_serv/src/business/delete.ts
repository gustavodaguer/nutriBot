import { IPersonParams } from "../interfaces/IPerson";
import { PersonRepository } from "../repositories/person";

export class DeletePerson {
  constructor(private repository = new PersonRepository()) { }
  
  async delete(params: IPersonParams) {
    await this.repository.delete(params);
  }
}