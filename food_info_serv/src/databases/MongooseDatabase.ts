/* eslint-disable snakecasejs/snakecasejs */
/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import { CONFIG } from '../constants/config';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { InternalServerError } from '../exceptions/exceptions';
import { IMongoDb } from '../interfaces/IMongoDb';
import { logger } from '../libs/logger';


const MONGOOSE_CONNECTED_STATUS = 1;

export class MongooseDatabase {
  private static instance: MongooseDatabase;

  private constructor(private mongo_params: IMongoDb) {}

  public static getInstance(mongo_params: IMongoDb = CONFIG.DATABASE): MongooseDatabase {
    if (!MongooseDatabase.instance) {
      MongooseDatabase.instance = new MongooseDatabase(mongo_params);
    }
    return MongooseDatabase.instance;
  }

  async connect(): Promise<void> {
    if (mongoose.connection.readyState === MONGOOSE_CONNECTED_STATUS) {
      return;
    }

    const { username, password, host, database } = this.mongo_params;
    
    const uri = `mongodb://${username}:${password}@${host}?authMechanism=DEFAULT`;
    try {
      logger.debug(uri)
      await mongoose.connect(uri, {
        dbName: database,
        user: username,
        pass: password,
      });
    } catch (error) {
      logger.error(error.message, JSON.stringify(error))
      throw new InternalServerError(ERROR_MESSAGES.CONNECT_DATABASE);
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
