export interface IPerson {
  _id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  birth_date: string;
  weight: number; // gramas
  height: number; // centimeters
  objective: string;
}
export interface IPersonParams {
  _id: IPerson['_id'];

}

export interface IPersonGet extends IPerson {
  age: number;
  full_name: string;
}