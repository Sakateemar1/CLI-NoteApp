const fs= require ('fs');
const chalk = require('chalk');

//writting a new file
// for(let i=0; i< 3; i++){
//     fs.writeFile("./node_modules/file" +i, `{
//         Tittle:"Mongodb",
//         Body:Mongodb is a non relational document database that provides support for JSON-like storage.
//     } ${i}`, err=>{
//         if (err){
//             throw (chalk.red(err));
//         }
//         console.log(chalk.green("File successfully added"));
//     })
// }
    //updating an existing file
fs.writeFile('./node-modules/file1.txt', {Tittle: "File Stystem Module",
Body:" File system module help us  to store, access, and manage data on our operating system."}, err=>{
    if (err){
        throw(chalk.red(err));
    }
    console.log(chalk.green("File updated successfully"));
} )


