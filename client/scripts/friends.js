// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

  _data: new Set(),

  items: function() {
    return [...Friends._data];
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = () => {}) {
    if (Friends.isFriend(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};