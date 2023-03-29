class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.input = document.querySelector('#message-input');

    this.input
    
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
    addDiv.innerText = document.querySelector('#message-input').value;

    document.querySelector('#main-container').append(addDiv);
  }

 
  hideMessage() {
    const hideDiv = document.querySelector('#message');
    hideDiv.remove();
  }
}

module.exports = MessageView;