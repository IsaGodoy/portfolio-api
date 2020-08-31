require("dotenv").config();
import MongoClient from "mongodb";

export async function connect() {
  //Connection variables
  const username = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const host = process.env.DB_HOST;
  const database = process.env.DB_NAME;

  const uri = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(database);
    console.log("DB is connected");
    return db;
  } catch (e) {
    console.log(e);
  }
}
