import mongoose, { Schema } from "mongoose";
import { userSchemaProps } from "@/types/user-schema.types";
import { hash } from "bcryptjs";

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

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hashed_pass = await hash(this.password, 10);
  this.password = hashed_pass;
  next();
});

const User =
  (mongoose.models?.User as mongoose.Model<userSchemaProps>) ||
  mongoose.model<userSchemaProps>("User", UserSchema);

export default User;
