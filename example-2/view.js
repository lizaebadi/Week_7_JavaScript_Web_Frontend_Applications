class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = text;

    this.mainContainerEl.append(newParagraph);
  };
}

module.exports = View;