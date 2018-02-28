'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = {};

    let directCount = 0;
    let indirectCount = 0;

    // Get badge count from direct messages
    let directMessages = document.getElementsByClassName('sidebar-notification-indicator')[0];

    if (directMessages && directMessages.innerText) {
      directCount = parseInt(directMessages.innerText);
    }

    var indirectMessages = document.getElementsByClassName("conversation-summary-unread-indicator--shown");
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
