class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const addDiv = document.createElement('div');
    addDiv.id = 'message';
    addDiv.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(addDiv);
  }
}

module.exports = MessageView;