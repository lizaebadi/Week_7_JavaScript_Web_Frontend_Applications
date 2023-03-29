class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })

  }

  displayMessage() {
    const addDiv = document.createElement('div');
    addDiv.id = 'message';
    addDiv.innerText = 'This message displayed by JavaScript';
    document.querySelector('#main-container').append(addDiv);
  }


  hideMessage() {
    const hideDiv = document.querySelector('#message');
    hideDiv.remove();
  }
}

module.exports = MessageView;