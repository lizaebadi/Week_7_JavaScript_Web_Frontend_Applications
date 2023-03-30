class NotesView {

  constructor(model) {
    this.model = model; 
    this.mainContainerEl = document.querySelector('#main-container'); 
    this.buttonEl = document.querySelector('#add-note-button');
    this.inputEl = document.querySelector('#message-input');

    this.buttonEl.addEventListener('click', () => {
      const newNote = this.model.addNote(this.inputEl.value);
      this.displayNotes();
    });
  };

  displayNotes() {
    const allNotes = this.model.getNotes();
    allNotes.forEach(note => {
      const newDiv = document.createElement('div');
      newDiv.className = 'note';
      newDiv.innerText = note; 
      this.mainContainerEl.append(newDiv);
    });
  };
}

module.exports = NotesView;
