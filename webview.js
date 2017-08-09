// Teamwork Chat integration
module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let count = 0;
    // Get badge count from element
    let messages = document.getElementsByClassName('sidebar-notification-indicator')[0];

    if (messages && messages.innerText) {
      count = parseInt(messages.innerText);
    }

    // Set new count number for the badge
    Franz.setBadge(count, messages);
  }

  // Runs action every second
  Franz.loop(getMessages);
}
