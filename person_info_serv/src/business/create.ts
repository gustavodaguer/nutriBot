import { IPerson } from "../interfaces/IPerson";
import { PersonRepository } from "../repositories/person";

export class CreatePerson {
  constructor(private repository = new PersonRepository()) { }
  
  async create(person: IPerson): Promise<void> {
    await this.repository.create(person);
  }
}