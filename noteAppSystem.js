const {db,client, connectToDatabase}= require('./database');
const chalk = require('chalk');


// Add a new note
const addNote = async (title, body) => {
  try {
    const collection = db.collection('notes'); // Replace 'notes' with your actual collection name
    const note = { title, body };
    const result = await collection.insertOne(note);
    console.log(chalk.green("Note added successfully"));
    return result;
  } catch (err) {
    console.error(chalk.red("Error inserting note", err));
  } finally {
    await client.close();
  }
};

//addNote(title:"About Fatima", body: "Fatima is a young lady chasing her dreams");
// List all notes
const listNotes = async () => {
  try {
    const collection = db.collection('notes'); // Replace 'notes' with your actual collection name
    const notes = await collection.find({}).toArray();
    console.log(chalk.blue('All Notes:', notes));
    if (notes.length === 0) {
      console.log(chalk.yellow('No notes found.'));
    } else {
      notes.forEach((note) => {
        console.log(chalk.cyan(`Title: ${note.title}`));
        console.log(`Body: ${note.body}`);
      });
    }
  } catch (err) {
    console.error(chalk.red("Error listing all notes", err));
  } finally {
    await client.close();
  }
};

// Delete note
const deleteNote = async (title) => {
  try {
    const collection = db.collection('notes'); // Replace 'notes' with your actual collection name
    const deletionResult = await collection.deleteOne({ title: title });
    if (deletionResult.deletedCount === 1) {
      console.log(chalk.green("Note deleted successfully."));
    } else {
      console.log(chalk.red("Note not found or not deleted."));
    }
  } catch (err) {
    console.error(chalk.red("Error deleting note:", err));
  } finally {
    await client.close();
  }
};

// Read a specified Note
const readNote = async (title) => {
  try {
    const collection = db.collection('notes'); // Replace 'notes' with your actual collection name
    const note = await collection.findOne({ title: title });
    if (!note) {
      console.log("Note not found.");
      return;
    }

    console.log(chalk.cyan(`Title: ${note.title}`));
    console.log(`Body: ${note.body}`);
  } catch (err) {
    console.error(chalk.red("Error reading note:", err));
  } finally {
      await client.close();
  }
};

module.exports = {
  addNote,
  deleteNote,
  listNotes,
  readNote,
};




