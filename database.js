const chalk = require('chalk');

const { MongoClient } = require('mongodb');

const uri = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "noteAppdb";
const db = client.db(dbName);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(chalk.green('Connected to MongoDB!'));
  } catch (error) {
    console.error(chalk.red('Error connecting to MongoDB:', error));
  } finally {
    await client.close();
  }
};
module.exports = { db, client, connectToDatabase};

