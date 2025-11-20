import mongoose, { Schema } from "mongoose";
import { userSchemaProps } from "@/types/user-schema.types";

const UserSchema: Schema<userSchemaProps> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const User =
  (mongoose.models?.User as mongoose.Model<userSchemaProps>) ||
  mongoose.model<userSchemaProps>("User", UserSchema);

export default User;
