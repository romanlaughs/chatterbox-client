// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on(
      'click',
      '.username',
      MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');
    var valueArray = Object.values(Messages.storage);
    for (var i = 0; i < valueArray.length; i++) {
      MessagesView.renderMessage(valueArray[i]);
    }
  },

  roomRender: function(room) {
    MessagesView.$chats.html('');
    var valueArray = Object.values(Messages.storage);
    for (var i = 0; i < valueArray.length; i++) {
      if (valueArray[i].roomname === room) {
        MessagesView.renderMessage(valueArray[i]);
      }
    }
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    if (Friends.isFriend(message.username)) {
      $message = MessageView.friender(message);
    }
    MessagesView.$chats.prepend($message);

  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    } else {
      Friends.toggleStatus(username, MessagesView.render);
    }
  }
};