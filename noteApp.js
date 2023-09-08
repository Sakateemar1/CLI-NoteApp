const chalk =require('chalk');
const {
    addNote,
    deleteNote,
    listNotes,
    readNote,
}= require("./noteAppSystem");

const args = process.argv.slice(2);
const flags={
    title: null,
    body:null,
};

const extractFlagsValue = (args) => {
  args.forEach((element) => {
    if (element.startsWith("--title")) {
      flags.title = element.replace(/^--title=/, "");
    }
    if (element.startsWith("--body")) {
      flags.body = element.replace(/^--body=/, "");
    }
  });
};

const operations = {
  list: () => {
    if (args.length > 1) {
      console.log("This function cannot take any arguments.");
    } else {
      listNotes();
    }
  },
  add: () => {
    extractFlagsValue(args);
    if (flags.title === null || flags.body === null) {
      console.log("Both --title and --body must be specified to add a note.");
    } else {
      const { title, body } = flags;
      addNote(title, body);
    }
  },
  remove: () => {
    extractFlagsValue(args);
    if (flags.title === null) {
      console.log("The --title flag must be specified to remove a note.");
    } else {
      const { title } = flags;
      deleteNote(title);
    }
  },
  read: () => {
    extractFlagsValue(args);
    if (flags.title === null) {
      console.log("The --title flag must be specified to read a note.");
    } else {
      const { title } = flags;
      readNote(title);
    }
  },
};

const operation = args[0];

switch (operation) {
    case 'list':
      operations.list();
      break;
    case 'add':
      operations.add();
      break;
    case 'remove':
      operations.remove();
      break;
    case 'read':
      operations.read();
      break;
    default:
      console.log("That is not a valid operation.");
  }
  