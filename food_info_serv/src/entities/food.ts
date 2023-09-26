import { model, Schema } from 'mongoose';

import { COLLECTIONS } from '../constants/collections';
import { IFood } from '../interfaces/IFood';

const food = new Schema<IFood>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    details: { type: Schema.Types.Mixed, required: false },
  },
  {
    collection: COLLECTIONS.FOOD
  }
);

export const FoodModel = model<IFood>('Food', food, COLLECTIONS.FOOD);

