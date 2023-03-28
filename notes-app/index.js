const NotesModel = require('./notesModel');

console.log("The notes app is running");

const model = new NotesModel();
model.addNote('Buy milk');
model.addNote('Buy apples');
console.log(model.getNotes());
