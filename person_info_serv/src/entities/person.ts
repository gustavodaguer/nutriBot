import { model, Schema } from 'mongoose';

import { COLLECTIONS } from '../constants/collections';
import { IPerson } from '../interfaces/IPerson';

const person = new Schema<IPerson>(
  {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    weight: { type: Number, required: true },
    birth_date: { type: String, required: true },
    objective: {type: String, required: true}
  },
  {
    collection: COLLECTIONS.FOOD
  }
);

export const PersonModel = model<IPerson>('Person', person, COLLECTIONS.FOOD);

