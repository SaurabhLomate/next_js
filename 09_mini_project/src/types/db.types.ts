import { Mongoose } from "mongoose";

export interface mongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongooseCache: mongooseCache;
}
