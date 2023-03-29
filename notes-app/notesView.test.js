/**
 * @jest-environment jsdom
 */

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const fs = require('fs');

describe('notes view', () => {
  it('displays the list of 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    model.addNote('First note');
    model.addNote('Second note');
    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});

