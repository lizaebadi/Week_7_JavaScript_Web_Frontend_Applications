const NotesModel = require("./notesModel");

describe('NotesModel', () => {
  it ('initially returns an empty list', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it ('adds a note to the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it ('resets the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Buy apples');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})