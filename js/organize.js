// Organize results

// to be able to use in other files
var Renderer = renderer;

var Organizer = {
  init: function(results) {
    Organizer.results = results;
    Organizer.articles = document.querySelectorAll('.news-list>li');
    Organizer.searchBox = document.querySelector('#filter');
    Organizer.sortLink = document.querySelector('#sort');

    // call filter function when a key is pressed in search box
    Organizer.searchBox.addEventListener('keyup', function(ev) {
      Organizer.filter( Organizer.searchBox.value );
    });

    // call sort function when sort link is clicked
    Organizer.sortLink.addEventListener('click', function(ev) {
      ev.preventDefault();
      // latest or oldest
      Organizer.sortedBy = Organizer.sortedBy === 'latest'? 
        'oldest' : 'latest';

      Organizer.results = Organizer.sortBy(results, Organizer.sortedBy);
      Renderer.renderData(Organizer.results);
      Organizer.articles = document.querySelectorAll('.news-list>li');
    });   
  },

  // filter results based on #filter input value
  filter: function(text) {
    var regExp = new RegExp(text, 'i');
    for(var i = 0; i < Organizer.results.length; i++) {
      var result = Organizer.results[i];
      var article = Organizer.articles[i];
      var exists = regExp.test(result.titleNoFormatting);
      exists = exists || regExp.test(result.content);
      if(exists) {
        article.classList.remove('hide');
      } else {
        article.classList.add('hide');
      }
    }
  },

  // sort the list by publised date
  // return the new ordered results
  sortBy: function(results, order) {
    switch(order){
      case 'latest':
        results = results.sort(function(a, b){
          return new Date(b.publishedDate) - new Date(a.publishedDate);
        });
        break;
      case 'oldest':
        results = results.sort(function(a, b){
          return new Date(a.publishedDate) - new Date(b.publishedDate);
        });
        break;
    }
    return results;
  }
}



