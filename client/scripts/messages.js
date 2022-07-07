// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {

  _data: {},

  update: function() {

  },

  addData: function(data, cb) {
    for (var i = 0; i < data.length; i++) {
      if (Messages._data[data[i].message_id] === undefined) {
        Messages._data[data[i].message_id] = data[i];
      }
    }
    cb();
  },
};

//Messages.prototype.addData = function(dataArray)
// Messages.prototype.storage = {};

// Messages.prototype.data = {};

// Messages.prototype.addData = function(dataArray) {
//   for (var i = 0; i < dataArray.length; i++) {
//     if (this.storage[i] === undefined) {
//       this.storage[i] = {};
//       this.storage[i].text = dataArray[i].text;
//     }
//   }
//   return this.storage;
// };
