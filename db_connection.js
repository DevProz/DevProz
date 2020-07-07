const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const url = 'mongodb+srv://daniellersisk:Icdattcwsm116!@cluster0.sprel.mongodb.net/devproz?retryWrites=true&w=majority'
mongoose.set("useUnifiedTopology", true);



async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect({
      url,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    await listDatabases(client);
    console.log("mongoose connected to MongoDB server");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }


}
main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
