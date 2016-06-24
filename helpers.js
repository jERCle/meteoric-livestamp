var Template = Package.templating.Template;

Template.registerHelper('livestamp', function(date) {
  var time = moment(date);

  // Fallback to current time if `date` is invalid.
  if(!time.isValid()) {
    time = moment();
  }

  var timestamp = time.toISOString(),
      timestring = time.fromNow();
  
  return new Spacebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'">'+timestring+'</span>');
});
