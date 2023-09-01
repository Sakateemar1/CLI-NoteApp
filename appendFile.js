//reference to fs
const fs= require('fs')
//reference to chalk
const chalk = require ('chalk');
//function for appending file(it add to  new content to  an existing file)
function appendFile(path){
fs.appendFile(path, '\nJavascript is used as a backend and front end programming language.', (err)=>{
    if (err){
        throw (err)
    }
    console.log(chalk.green('data has been added to file'))
})
}
    appendFile('./files_folder/file0.txt');

// //function for appending to an existing file.
// fs.appendFile = ('./files_folder/file2.txt', '.\n Mongodb uses Atlas as the cloud Database GUI and Compass as the Local Database GUI', (err)=>{
//     if (err){
//         throw (err);
//     }
//     console.log(chalk.green("Document appended successfully"))
// })

