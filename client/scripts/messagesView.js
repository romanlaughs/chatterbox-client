// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    for (var key in Messages._data) {
      MessagesView.renderMessage(Messages._data[key]);
    }
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};