
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Post = [{
  id: 1,
  title: "Rais is Omask",
  author: "d2h",
  publishedAt: new Date("12-27-2012"),
  intro: "There are lost of a la carte software developers in the world.",
  extended: "I want this for my ORM, I want for my template language to bla bla bla"
}, {
  id: 2,
  title: "Gread day",
  author: "d2h",
  publishedAt: new Date("12-24-2012"),
  intro: "Today is a summy and beautifull day.",
  extended: "The days with sun are **amazing** days. Those `with clouds are` not that cool!"
}];

App.Router.reopen({
  //location: 'history'
});


App.Router.map(function() {
  this.resource("about");
  this.resource("posts", function(){
    this.route("post", { path: "/:post_id" });
  });
});

/*
App.PostsPostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.filter(function(post) { return post.id == params.post_id; })[0];
  }
});
*/

App.PostsController = Ember.ArrayController.extend({
  posts: App.Post
});


Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});

var converter = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(text) {
  var html = converter.makeHtml(text);
  return new Handlebars.SafeString(html);
});

