const fs = require('fs-extra');// requiring the fs-extra module which is an extension of fs(fileSystem)
const chalk = require('chalk');

// Helper function to sanitize titles
function sanitizeTitle(title) {
    return title.replace(/[^a-zA-Z0-9-_]/g, "");
}

// Helper function to handle file existence
async function fileExists(filePath) {
    return await fs.pathExists(filePath);
}

// Insert note
async function insertLocalNote(title, body) {
    try {
        if (!title || !body) {
            throw new Error("Title and body are required.");
        }
        
        const sanitizedTitle = sanitizeTitle(title);
        const filePath = `./Notes/${sanitizedTitle}.txt`;
        const noteFile = `${title}:\n\n\n${body}`;
        
        await fs.outputFile(filePath, noteFile, 'utf-8');
        console.log(chalk.green("Note file created successfully"));
    } catch (err) {
        console.error(chalk.red("Error creating note locally:", err.message));
    }
}

// Delete note
async function deleteLocalNote(title) {
    try {
        const filePath = `./Notes/${sanitizeTitle(title)}.txt`;
        const exists = await fileExists(filePath);
        
        if (!exists) {
            console.log(`File "${title}.txt" does not exist`);
            return;
        }
        
        await fs.remove(filePath);
        console.log(chalk.green(`File "${title}.txt" deleted successfully.`));
    } catch (err) {
        console.error(chalk.red(`Error deleting file "${title}.txt":`, err.message));
    }
}

// List all notes
async function listLocalNotes() {
    try {
        const notesDir = "./Notes";
        const files = await fs.readdir(notesDir);
        const textFiles = files.filter((file) => file.endsWith(".txt"));

        if (textFiles.length === 0) {
            console.log("No notes found.");
        } else {
            console.log("List of Notes:");
            textFiles.forEach((note) => {
                console.log(note);
            });
        }
        return textFiles;
    } catch (err) {
        console.error(chalk.red("Error displaying notes:", err.message));
        return [];
    }
}

// Read the content of a note
async function readLocalNote(title) {
    try {
        if (!title) {
            console.log("Title is required.");
            return null;
        }
        
        const filePath = `./Notes/${sanitizeTitle(title)}.txt`;
        const exists = await fileExists(filePath);
        
        if (!exists) {
            console.log(`Note "${title}" does not exist.`);
            return null;
        }

        const content = await fs.readFile(filePath, 'utf-8');
        console.log("Note content:", content);
        return content;
    } catch (err) {
        console.error(`Error reading note "${title}":`, err.message);
        return null;
    }
}

module.exports = {
    insertLocalNote,
    deleteLocalNote,
    listLocalNotes,
    readLocalNote,
};
