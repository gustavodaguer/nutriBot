import { ERROR_MESSAGES } from "../constants/errorMessages";
import { NotFoundError } from "../exceptions/exceptions";
import { IPerson, IPersonGet, IPersonParams } from "../interfaces/IPerson";
import { PersonRepository } from "../repositories/person";
import { get_birth_date } from '../utils/birthdate';

export class GetPersons {
  constructor(private repository = new PersonRepository()) { }
  
  async getAll() {
    const response = await this.repository.getAll();
    return response.map(map_return_person);
  }

  async getById(params: IPersonParams): Promise<IPersonGet> {
    const response = await this.repository.getById(params);

    if (!response) {
      throw new NotFoundError(ERROR_MESSAGES.NOT_FOUND_FOOD)
    }
    
    return map_return_person(response);
  }
}

const  map_return_person = (person: IPerson): IPersonGet => ({
  ...person,
  full_name: [person.first_name, person.middle_name, person.last_name].filter(v => v).join(' '),
  age: get_birth_date(person.birth_date)
})