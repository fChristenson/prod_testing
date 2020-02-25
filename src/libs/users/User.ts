import * as mongoose from "mongoose";

export interface IEntity extends mongoose.Document {
  test?: boolean;
}

export interface ICreateUserData {
  name: string;
  password: string;
}

export interface IUser extends IEntity {
  name: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  password: String,
  test: Boolean
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
