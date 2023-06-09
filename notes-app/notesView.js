class NotesView {

  constructor(model) {
    this.model = model; 
    this.mainContainerEl = document.querySelector('#main-container'); 
    this.buttonEl = document.querySelector('#add-note-button');
    this.inputEl = document.querySelector('#message-input');

    this.buttonEl.addEventListener('click', () => {
      const newNote = this.model.addNote(this.inputEl.value);
      this.displayNotes();
      this.inputEl.value = "";
    });
  };

  displayNotes() {
    this.mainContainerEl.innerHTML = "";
    const allNotes = this.model.getNotes();

    allNotes.forEach(note => {
      const newDiv = document.createElement('div');
      newDiv.className = 'note';
      newDiv.textContent = note; 
      this.mainContainerEl.append(newDiv);
    });
  };
}

module.exports = NotesView;
