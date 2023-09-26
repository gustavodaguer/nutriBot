import { MongooseDatabase } from "../databases/MongooseDatabase";

export abstract class MongoRepository {
  constructor(protected database = MongooseDatabase.getInstance()) { }
  
  protected open(): Promise<void> {
    return this.database.connect();
  }
  protected close(): Promise<void> {
    return this.database.disconnect();
  }
}