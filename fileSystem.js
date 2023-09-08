// Import the functions from the localNoteSystem module
const {
    insertLocalNote,
    readLocalNote,
    listLocalNotes,
    deleteLocalNote,
} = require("./localNoteSystem");

// Get the command-line arguments passed to the script
const args = process.argv.slice(2);

// Check the first argument (args[0]) to determine the operation
if (args[0] === "list") {
    // Show all notes
    if (args.length > 1) {
        console.log(chalk.blue("This function cannot take any parameters"));
    } else {
        listLocalNotes();
    }
} else if (args[0] === "insert") {
    // Insert a new note
    if (args.length !== 3 || !args[1].startsWith("--title=") || !args[2].startsWith("--body=")) {
        console.log("Usage: node script.js insert --title=<title> --body=<body>");
    } else {
        const title = args[1].split("=")[1];
        const body = args[2].split("=")[1];
        insertLocalNote(title, body);
    }
} else if (args[0] === "delete") {
    // Delete a note
    if (args.length !== 2 || !args[1].startsWith("--title=")) {
        console.log(chalk.blue("Usage: node script.js delete --title=<title>"));
    } else {
        const title = args[1].split("=")[1];
        deleteLocalNote(title);
    }
} else if (args[0] === "read") {
    // Read the content of a note
    if (args.length !== 2 || !args[1].startsWith("--title=")) {
        console.log(chalk.blue("Usage: node script.js read --title=<title>"));
    } else {
        const title = args[1].split("=")[1];
        readLocalNote(title);
    }
} else {
    // Handle invalid operations
    console.log("That is not a valid operation");
}
