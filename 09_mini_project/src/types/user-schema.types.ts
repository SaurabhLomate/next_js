import { Document } from "mongoose";

export interface userSchemaProps extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
