//requiring mongodb in file
const {MongoClient, ServerApiVersion}=  require('mongodb');

//requiring chalk in the file
const chalk = require('chalk');

//declaring the local server to connect to
const uri = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient (uri);

//declaring the database 
const db = client.db('noteAppdb2');

//importing the fuctions to perform (CRUD operations) from noteApp.js file
import { createCollection } from './noteApp.js';
import { findDocument } from './noteApp.js';
import { deleteDocument} from './noteApp.js';
import { insertDocument } from './noteApp.js';
import { updateDocument } from './noteApp.js';

//Using the Process Object (process.arv) in a fuction to perform the CRUD operations by parsing arguements from the command line.

const run = async () => {
try{

    await client.connect();

    const args = process.argv.slice(2);// exclude first 2 elements (the node file and the filepath).
    if (args[0] === "createCollection") { // if the arguement pasrsed from the command line  is "createCollection",
    await createCollection(db, args[1]);// the second arguement will be the collection name. and it will create the Collection.
    }else  if (args[0] === "findDocument"){ // if the  first arguement parsed from the command line is "findDocument"
    findDocument(db, 'notes', args[1]);// the second arguement parsed will  query(the query).
    }else if (args[0] === "deleteDocument"){ // if the first arguement parsed from the command line is "deleteDocument".
    deleteDocument(db,'notes', args[1]);// the second arguement parsed will be field from the document to be deleted
    }else if (args[0] === "updateDocument"){// if the first arguement parsed from the command line is "update}
    updateDocument(db, 'notes', args[1], args[2])// this will take 2 arguements, the field to be updated, and the updated document.
    }else if (args[0] === "insertDocument"){// if the first arguement parsed from the command line is "insertDocument"
    insertDocument(db, 'note', args[1], args[2]);// it takes 2  arguements, the Tittle and the Content.
    }
    }catch (err){
        console.error(Error);
    }finally{
        await client.close();
    }

}
 run (). catch(error=> console.log(error));
