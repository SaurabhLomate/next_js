import { signUpType } from "@/schemas/user-zod.schema";
import { Document } from "mongoose";

export interface userSchemaProps extends Document, signUpType {
  //   username: string;
  //   email: string;
  //   password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
