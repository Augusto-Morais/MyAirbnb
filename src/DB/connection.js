import mongoose from "mongoose";
import "dotenv/config";

await mongoose
  .connect(process.env.CONN_STRING, {
    useNewURLParser: true,
    dbName: "MyAirbnb",
  });

let db = mongoose.connection;

export default db;


      

