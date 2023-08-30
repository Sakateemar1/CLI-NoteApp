const fs =require('fs');
const chalk =require('chalk');

 fs.readFile('file2.txt', 'utf8', (err, data)=>{
    if (err){
        throw(chalk.red(err));
    }
    console.log(chalk.green(data));

 })