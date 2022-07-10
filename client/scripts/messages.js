// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {

  storage: {},

  add: function(message) {
    Messages.storage[message['message_id']] = message;
  },

  update: function(arrayData, cb) {
    for (var i = 0; i < arrayData.length; i++) {
      Messages.add(arrayData[i]);
    }

    cb(Object.values(Messages.storage));
  },

  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};

