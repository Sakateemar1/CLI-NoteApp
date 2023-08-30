const  {MongoClient,ServerApiVersion}= require ("mongodb");
const chalk =require ("chalk");

const uri ="mongodb://0.0.0.0:27017/"
const client = new MongoClient(uri);

//globally creating the database
const db = client.db ("noteAppdb");
//const collectionName= 'notes'


//function for creating the note collection
const  createCollection = async (db, collectionName)=>{
    try{
        const collection = await db.collection(collectionName);
        console.log(chalk.green("Collection Created successfully"));
    }catch(err){
        console.error(chalk.red("Error creating collection"));
    }
};
    //function for inserting document in the note collection
    const insertDocument= async (db, collectionName, document)=>{
        const collection =db.collection(collectionName);
        try{
            const myDocument = await collection.insertOne(document);
            console.log(chalk.green("Document inserted successfully"));
        }catch (err){
            console.error(chalk.red("Error inserting document"), err);
        }
    };

    //function for listing all noted or reading a particular note
    const findDocument= async (db, collectionName, query)=> {
        try{
            await client.connect();
            const collection=db.collection(collectionName);
            const myDocument = await collection.find(query).toArray();
            console.log(chalk.green(myDocument));
        }catch (err){
            console.err(chalk.red("Problem finding Document"));
        }finally{
            await client.close();
        }
    };
            //findDocument(db, 'notes', {});//calling function find to search all available document
            //findDocument(db, 'notes', {Tittle:'Mongodb'});//calling function find to search for a particular document

            //function for updating the document

            const updateDocument= async(db, collectionName, selectionQuery,updatedDocument)=>{
                try{
                    await client.connect();
                    const collection=db.collection(collectionName);
                    await collection.updateOne(selectionQuery, { $set:updatedDocument});
                    console.log(chalk.green("Document updated successfully"));
                }catch(err){
                    console.error("Error updating document",err);
                }finally{
                    await client.close();
                }
            }
               //updateDocument(db, 'notes',{Tittle:"Mongo database"}, {Tittle:"Mongodb"});//callin the function updateDocument

               //deleting the document
               const deleteDocument= async(db, collectionName, document )=>{
                try{
                    await client.connect();
                    const collection=db.collection(collectionName);
                   const result= await collection.deleteOne( document);
                    console.log(chalk.green("Document deleted successfully"));
                }catch (err){
                    console.error(chalk.red("Error deleting document"), err);
                }finally{
                    await client.close();
                }
               } 
              // deleteDocument(db,'notes', {Tittle:"Mongodb"});
    
    
    
    
    
               // connecting the client to the database
    
        const run = async()=>{
           
            try{
                await client.connect();

                //create collection
                await createCollection(db, "notes");

                //insert document in the notes collection
                await insertDocument(db, "notes",{
                    Tittle:"Mongodb",
                    Body:"Mongodb is a non relational document database that provides support for JSON-like storage."
                });

                    await insertDocument(db, "notes", {
                        Tittle:"File Stystem Module",
                        Body:" File system module help us  to store, access, and manage data on our operating system."
                    });

                    await insertDocument(db,"notes", {
                        Tittle:"Javascript",
                        Body:"Javascript is a scripting language used to develop web pages."
                    });
            }catch (error){
                console.error(chalk.red(Error));
            }finally{
                await client.close();
            }
        }
                //run().catch(err => console.log(err))