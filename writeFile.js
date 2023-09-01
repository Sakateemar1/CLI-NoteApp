const fs= require ('fs');
const chalk = require('chalk');

//function for creating (writting) a new file(s)
function createFile(path){
for(let i=0; i< 1; i++){
    fs.writeFile(path, +i, `{
        Tittle:"The Goodness of God in Fatima's life ",
        Body:God is good and he is consistence in all his ways, he shall supply all my needs according to his richness in glory, because he is my shepheard so I shall not lack anything.
    } ${i}`, err=>{
        if (err){
            throw (chalk.red(err));
        }
        console.log(chalk.green("File successfully created"));
    })
}
}
        createFile('./files_folder/file4.txt'); 


   //function for  updating an existing file(overwritting an existing file)/ it can also create a new file if it does not exist
    function writeFile(path){
    fs.writeFile(path, `{
    Tittle:"Mongodb",
    Body:Mongodb is a non relational document database that provides support for JSON-like storage."}`, err=>{
    if (err){
        throw(chalk.red(err));
    }
    console.log(chalk.green("File updated successfully"));
} )
    }
    //writeFile('./files_folder/file2.txt');
