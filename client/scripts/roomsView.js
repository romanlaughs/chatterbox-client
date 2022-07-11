// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    RoomsView.$select.html('');
    Rooms.items().forEach(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $option = $('<option>') .val(roomname) .text(roomname);
    RoomsView.$select.append($option);

  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    console.log(Rooms.selected);
    MessagesView.roomRender(Rooms.selected);
  },

  handleClick: function(event) {
    var newRoom = prompt('What Room Would You Like to Add?');
    if (newRoom) {
      Rooms.add(newRoom, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  },

};
