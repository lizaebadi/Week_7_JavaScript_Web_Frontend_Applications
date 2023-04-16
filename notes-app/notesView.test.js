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

  it('clicks the button and displays user input', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Testing note';
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
    
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Testing note');
  });

  it('displays correct number of notes by clearing all previous notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('First note');
    view.displayNotes();
    model.addNote('Second note');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
});

