import config from "@/config";
import { Mongoose, connect } from "mongoose";

let cached = global.mongooseCache;
if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function connectDb(): Promise<Mongoose> {
  if (cached.conn) {
    console.log("connection is already available 😊");
    return cached.conn;
  }
  try {
    if (!cached.promise) {
      cached.promise = connect(config.MONGO_URI!, { dbName: config.DB_NAME });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    throw new Error(error as string);
  }
}

export default connectDb;
