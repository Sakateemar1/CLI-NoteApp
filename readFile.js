const fs =require('fs');
const chalk =require('chalk');

//function for reading a file  from the files folder

function readFile(path){
 fs.readFile(path, 'utf8', (err, data)=>{
    if (err){
        throw(chalk.red(err));
    }
    console.log(chalk.green.underline("This is your note:") ,data);

 });
}
readFile('./files_folder/file0.txt');

