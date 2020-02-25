import { IEntity } from "./users/User";
import { ProdTestService } from "./ProdTestService";
import * as mongoose from "mongoose";

export class StorageService<
  T extends mongoose.Model<IEntity>
> extends ProdTestService {
  private Model: T;

  constructor(Model: T) {
    super();
    this.Model = Model;
  }

  save(data: any) {
    const model = new this.Model(this.maybeAddTestMetaData(data));
    return model.save();
  }
}
