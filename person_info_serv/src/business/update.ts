import { IPerson } from "../interfaces/IPerson";
import { PersonRepository } from "../repositories/person";

export class UpdatePerson {
  constructor(private repository = new PersonRepository()) { }
  
  async update(person: IPerson): Promise<void> {
    await this.repository.update(person);
  }
}