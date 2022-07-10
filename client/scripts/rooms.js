// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: new Set(),

  selected: 'lobby',

  items: function() {
    return [... Rooms._data];
  },

  addStorage: function(data, cb) {
    for (var i = 0; i < data.length; i++) {
      if (Rooms._data[data[i].roomname] === undefined) {
        Rooms._data[data[i].roomname] = data[i].roomname;
      }
    }
    cb();
  },

  isSelected: function(roomname = 'lobby') {
    return roomname === Rooms.selected;
  },

  addRoom: function(roomname, callback = () => {}) {
    Rooms._data.add(roomname);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = () => {}) {
    messages.forEach(message => {
      Rooms._data.add(message.roomname);
    });
    callback(Rooms.items());
  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};