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

  clearParagraphs() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(paragraph => {
      paragraph.remove();
    });
  };
}

module.exports = View;