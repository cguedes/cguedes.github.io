
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.reopen({
  //location: 'history'
});


App.Router.map(function() {
  this.resource("about");
  this.resource("contact");
  this.resource("projects");
  this.resource("talks");
});


Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});

var converter = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(text) {
  var html = converter.makeHtml(text);
  return new Handlebars.SafeString(html);
});

