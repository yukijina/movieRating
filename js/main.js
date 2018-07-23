$('#selectBtn').change(function() {
   var filmTitle = $('input').val()
   var filmNote = $('textarea').val()
   var stars = $('#selectBtn')[0].selectedIndex;
     //[0] change jQuery to javascript. selectedIndex is only for javascript
   var now = new Date();

   if(filmTitle) {
     $('#film-list').append("<h3 class='w-100 text-info'>" + filmTitle + "</h3>").css('text-transform', 'uppercase');
     $('#film-list').append("<h5 class='w-100'>" + filmNote + "</h5>");
     $('#film-list').append("<h6 class='w-100 text-warning'>" + stars + " stars</h6>");
     $('#film-list').append("<p class='w-100'>" + now + "</p>").css('font-size', '0.6rem');
   }
})

//$('textarea').val()
// $('button a').val()
