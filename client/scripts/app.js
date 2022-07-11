// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(App.fetch, 2000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      if (Rooms.selected === 'lobby') {
        Messages.update(data, MessagesView.render);
      } else {
        Messages.update(data, MessagesView.roomRender, Rooms.selected);
      }
      Rooms.update(data, RoomsView.render);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
