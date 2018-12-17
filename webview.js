'use strict';

const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = {};

    let directCount = 0;
    let indirectCount = 0;

    let directMessages = document.getElementsByClassName('s-conversations-nav__unread-important-indicator')[0];

    if (directMessages && directMessages.innerText) {
      directCount = parseInt(directMessages.innerText);
    }

    var indirectMessages = document.getElementsByClassName("s-conversation-preview__unread-important-indicator  ");
    [].forEach.call(indirectMessages, function(e) {
      var countValue = e.innerText;
      if (countValue == "") {
        ++indirectCount;
      }
    });

    Franz.setBadge(directCount, indirectCount);
  };
  
  Franz.loop(getMessages);
}
