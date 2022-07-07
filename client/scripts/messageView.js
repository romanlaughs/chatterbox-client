// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username">
        <p> <%= username %> </p>
        </div>
        <div class="message">
          <h1> <%= text %> </h1>
        </div>
      </div>
    `)



};