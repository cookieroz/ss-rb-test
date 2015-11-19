// init functions, create app object
var app = {
  init: function() {
    getData()
      .then(function(data){
        return renderer.renderData(data.results);
      })
      .then(Organizer.init)
      .then(function() {
        console.log('the application has started correctly');
      })
      .catch(function(err) {
        console.error(err);
      });
  }
}

// get data from data.json
// running local apache server
var getData = function() {
  var url = 'js/data.json';
  return getJSON(url)
    .catch(function(err) {
      console.log('there was an error', err);
    });
}

// init the app
app.init();
