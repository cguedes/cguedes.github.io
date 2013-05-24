
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.reopen({
  //location: 'history'
});

// Contacts ################################################################################
function Contact(contactType, contactIcon, contactLink) {
  this.contactType = contactType;
  this.contactIcon = contactIcon;
  this.contactLink = contactLink;
}

App.Contacts = { 
  contacts: [
    new Contact("Linked in", "icon-linkedin-sign", "http://pt.linkedin.com/in/cguedes/"),
    new Contact("Github",   "icon-github", "http://cguedes.github.com"),
    new Contact("Twitter", "icon-twitter-sign", "https://twitter.com/cguedes"),
    new Contact("Email", "icon-envelope", "cguedes_AT_gmail"),
  ]
};

App.ContactsRoute = Ember.Route.extend({
  model: function() { return App.Contacts; }
});


// Academia #################################################################################
function Course(acronym, name, curricularSemester, webLink) {
  this.acronym = acronym;
  this.name = name;
  this.curricularSemester = curricularSemester;
  this.webLink = webLink || "http://www.deetc.isel.ipl.pt/programacao/" + acronym;
}

function CourseThoth(acronym, name, curricularSemester, courseTag) {
  var webLink = "http://thoth.cc.e.ipl.pt/classes/" + courseTag + "/";
  Course.apply(this, [acronym, name, curricularSemester, webLink]);
}

function LectiveSemesterCourses(lectiveSemester, courses) {
  this.lectiveSemester = lectiveSemester;
  this.courses = courses;
}

App.Academia = {
  courses: [
    new LectiveSemesterCourses("2s1213", [
      new CourseThoth("POO", "Programação Orientada Por Objectos", "2nd", "POO/1213v/LI22D"), 
      new CourseThoth("LS", "Laboratório de Software", "4th", "LS/1213v/LI41N")]
    ),
    new LectiveSemesterCourses("1s1213", [
      new CourseThoth("CG", "Computação Gráfica", "optional, of 3rd/5th", "CG/1213i/LI31D-LI51D"), 
      new CourseThoth("CG", "Computação Gráfica (pós-laboral)", "optional, of 3rd/5th", "CG/1213i/LI31N-LI51N")]
    ),
    new LectiveSemesterCourses("2s1112", [
      new CourseThoth("LS", "Laboratório de Software", "4th", "LS/1112v/LI41N"),
      new CourseThoth("POO", "Programação Orientada Por Objectos", "2nd", "POO/1112v/LI22D")]
    ),    
    new LectiveSemesterCourses("1s1112", [
      new CourseThoth("CG", "Computação Gráfica", "optional, of 3rd/5th", "CG/1112i/LI31D-LI51D"), 
      new CourseThoth("CG", "Computação Gráfica (pós-laboral)", "optional, of 3rd/5th", "CG/1112i/LI31N-LI51N")]
    ),
    new LectiveSemesterCourses("2s1011", [
      new CourseThoth("Pg", "Programação", "1st", "PG/1011i/LR11D")]
    ),   
    new LectiveSemesterCourses("1s1011", [
      new Course("LS", "Laboratório de Software", "4th")]
    ), 
    new LectiveSemesterCourses("2s0910", [
      new CourseThoth("POO", "Programação Orientada Por Objectos", "2nd", "POO/0910v/LT23D")] 
    ),   
    new LectiveSemesterCourses("1s0910", [
      new CourseThoth("Pg", "Programação", "1st", "PG/0910i/LI12D"),
      new CourseThoth("Pg", "Programação", "1st", "PG/0910i/LT12D"),
      new CourseThoth("PI", "Programação na Internet", "5th", "PI/0910i/LI52D")]
    ),   
    new LectiveSemesterCourses("2s0809", [
      new Course("POO", "Programação Orientada Por Objectos", "2nd"), 
      new Course("PI", "Programação na Internet", "5th")]
    ),
    new LectiveSemesterCourses("1s0809", [
      new Course("Pg", "Programação", "1st"), 
      new Course("PI", "Programação na Internet", "5th")]
    ),
    new LectiveSemesterCourses("2s0708", [
      new Course("PI", "Programação na Internet", "5th"), 
      new Course("SI1", "Sistemas de Informação 1", "4th", "http://www.deetc.isel.ipl.pt/sinfoconhecimento/licenciatura/si1/")]
    ), 
    new LectiveSemesterCourses("1s0708", [
      new Course("CG", "Computação Gráfica", "optional, of 3rd/5th")]
      ),
    new LectiveSemesterCourses("2s0607", [
      new Course("Pg", "Programação", "1st")]
    ), 
    new LectiveSemesterCourses("1s0607", [
      new Course("CG", "Computação Gráfica", "optional, of 3rd/5th"),
      new Course("PI", "Programação na Internet", "5th")]
    ), 
    new LectiveSemesterCourses("2s0506", [
      new Course("Pg", "Programação 1 - Telecomunicações", "1st"), 
      new Course("TI", "Tecnologias da Internet", "6th", "http://www.deetc.isel.ipl.pt/programacao/Programacao_Inv_2005_2006/TI/")]
    ), 
    new LectiveSemesterCourses("1s0506", [
      new Course("Pg2", "Programação 2 - Informática", "2nd"), 
      new Course("TI", "Tecnologias da Internet", "6th")]
    ), 
    new LectiveSemesterCourses("2s0405", [
      new Course("Pg2", "Programação 2 - Informática", "6th")]
    ), 
  ]
};

App.AcademiaRoute = Ember.Route.extend({
  model: function() { return App.Academia; }
});


// Routes ###################################################################################
App.Router.map(function() {
  this.resource("about");
  this.resource("contacts");
  this.resource("projects");
  this.resource("training");
  this.resource("academia");
  this.resource("blog");
});


// Utilities ###################################################################################
Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});

var converter = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(text) {
  var html = converter.makeHtml(text);
  return new Handlebars.SafeString(html);
});

