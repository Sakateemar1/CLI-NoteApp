const  {MongoClient,ServerApiVersion}= require ("mongodb");//requiring mongodb
const chalk =require ("chalk");// requiring chalk module

const uri ="mongodb://0.0.0.0:27017/"// connecting to the server
const client = new MongoClient(uri);// Create a new mongo client

const dbName ="noteAppdb2"

//globally creating the database
const db = client.db ("noteAppdb2");

//const collectionName= 'notes2'


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
    //export function insertDocument(){
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
    //export function findDocument(){
    const findDocument= async (db, collectionName, query)=> {
        try{
            await client.connect();
            const collection=db.collection(collectionName);
            const myDocument = await collection.find(query).toArray();
            console.log(chalk.green(myDocument));
        }catch (err){
            console.error(chalk.red("Problem finding Document"),err);
        }finally{
            await client.close();
        }
    };
       
        //findDocument(db, 'notes', {});//calling function find to search all available document
            //findDocument(db, 'notes', {Tittle:'Mongodb'});//calling function find to search for a particular document

            //function for updating the document
           // export function updateDocument(){
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
              // export function deleteDocument(){
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
            
               //deleteDocument(db,'notes', {Tittle:"Mongodb"});


               
        //connecting the client to the database
    
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
                run().catch(err => console.log(err)); // calling function run to create the collection and insert document in it


   
        //Using the Process Object (process.arv) in a fuction to perform the CRUD operations by parsing arguements from the command line.    
            
        // const run = async () => {
        //     try{
            
        //         await client.connect();
            
        //         const args = process.argv.slice(2);// exclude first 2 elements (the node file and the filepath).
        //         if (args[0] === "createCollection") { // if the arguement pasrsed from the command line  is "createCollection",
        //         await createCollection(db, args[1]);// the second arguement will be the collection name. and it will create the Collection.
        //         }else  if (args[0] === "findDocument"){ // if the  first arguement parsed from the command line is "findDocument"
        //         findDocument(db, 'notes2', args[1]);// the second arguement parsed will  query(the query).
        //         }else if (args[0] === "deleteDocument"){ // if the first arguement parsed from the command line is "deleteDocument".
        //         deleteDocument(db,'notes2', args[1]);// the second arguement parsed will be field from the document to be deleted
        //         }else if (args[0] === "updateDocument"){// if the first arguement parsed from the command line is "update}
        //         updateDocument(db, 'notes2', args[1], args[2])// this will take 2 arguements, the field to be updated, and the updated document.
        //         }else if (args[0] === "insertDocument"){// if the first arguement parsed from the command line is "insertDocument"
        //         insertDocument(db, 'note2', args[1], args[2]);// it takes 2  arguements, the Tittle and the Content.
        //         }
        //         }catch (err){
        //             console.error(Error);
        //         }finally{
        //             await client.close();
        //         }
            
        //     }
        //      run (). catch(error=> console.log(error));
            
            
            