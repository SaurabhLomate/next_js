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
      console.log("trying to connect mongo uri_____");
      console.log(`${config.MONGO_URI!}/${config.DB_NAME}`);
      cached.promise = connect(`${config.MONGO_URI!}/${config.DB_NAME}`);
    }
    cached.conn = await cached.promise;
    console.log("mongodb connected successfully..");
    return cached.conn;
  } catch (error) {
    throw new Error(`error ---- ${error}`);
  }
}

export default connectDb;
