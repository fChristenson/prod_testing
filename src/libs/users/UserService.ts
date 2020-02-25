import { IUser, UserModel, ICreateUserData } from "./User";
import * as mongoose from "mongoose";
import { StorageService } from "../StorageService";

export class UserService extends StorageService<mongoose.Model<IUser>> {
  private model: mongoose.Model<IUser>;

  constructor(model: mongoose.Model<IUser>) {
    super(model);

    this.model = model;
  }

  getAllUsers() {
    return this.model.find({});
  }

  getUser(id: string) {
    return this.model.findById(id);
  }

  saveUser(user: ICreateUserData) {
    return this.save(user);
  }
}
