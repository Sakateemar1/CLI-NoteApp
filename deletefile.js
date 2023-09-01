const fs= require('fs');
const chalk = require('chalk');

//function of deleting an existing file

function deleteFile(path) {
    fs.unlink('./files_folder/file2.txt', (err) => {
        if (err) {
            throw(chalk.red(err));
        }
            console.log(chalk.green('file deleted successfully'));
    });
}
deleteFile('./files_folder/file2.txt.');
