// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on(
      'click',
      RoomsView.handleClick
    );
  },

  render: function() {
    for (var room in Rooms._data) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    var roomnameTwo = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.prepend(roomnameTwo);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    console.log(event);
  },

};
