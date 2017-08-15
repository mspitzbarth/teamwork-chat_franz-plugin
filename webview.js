// Teamwork Chat integration
module.exports = (Franz, options) => {
  function getMessages() {
    const count = {};

    let directCount = 0;
    let indirectCount = 0;

    // Get badge count from direct messages
    let directMessages = document.getElementsByClassName('sidebar-notification-indicator')[0];

    if (directMessages && directMessages.innerText) {
      directCount = parseInt(directMessages.innerText);
    }

    // Get badge cound from indirect messages
    var indirectMessages = document.getElementsByClassName("conversation-summary-unread-indicator--shown");
    [].forEach.call(indirectMessages, function(e) {
      var countValue = e.innerText;
      if (countValue == "") {
        ++indirectCount;
      }
    });

    // Set new count number for the badge
    Franz.setBadge(directCount, indirectCount);
  }

  // Runs action every second
  Franz.loop(getMessages);
}
