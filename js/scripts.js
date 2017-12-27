var title = $('.title');
var task = $('.task');

$('#save-btn').on('click', addTask);


function addTask(event) {
  var newTask = new Task (Date.now(), title.val(), task.val());
  if (title.val('') || task.val('')){
    $('#save-btn').attr('disabled', true);
  } else {
    event.preventDefault();
    $('#save-btn').attr('disabled', false);
    // prependTask(newTask);
    // toLocalStorage(newTask);
    // inputReset();
    console.log(newTask);
  }
};

// function Task (id, title, task) {
//   this.id = id;
//   this.title = title;
//   this.task = task;
//   this.level = 'level: normal';
// }

// function prependTask(newTask) {
//   $('.to-do').prepend(
//     `<article id="${idea.id}">
//       <h2>${idea.title}</h2>
//       <label for="remove-button">
//         <button class="remove button"></button>
//       </label>
//       <p>${idea.body}</p>
//       <label for="quality-up-button" class="upL">
//         <button class="quality-up button" name="quality-up-button"></button>
//       </label>
//       <label for="quality-down-button" class="downL">
//         <button class="quality-down button" name="quality-down-button"></button>
//       </label>
//       <h3>${idea.quality}</h3>
//     </article>`
//   );
// };

// $('#filter').on('keyup', function() {
//   var searchRequest = $('#filter').val();
//   $('article').each(function(){
//     var searchResult = $(this).text().indexOf(searchRequest);
//     this.style.display = searchResult > -1 ? "" : "none";
//   })
// })

// function inputReset() {
//   title.val('');
//   task.val('');
//   title.focus();
// };

// function toLocalStorage(idea) {
//  var stringifiedIdea = JSON.stringify(idea);
//  localStorage.setItem(idea.id, JSON.stringify(idea));
// };

// function pageLoad() {
//  for (var i = 0; i < localStorage.length; i++) {
//    var returnIdea = localStorage.getItem(localStorage.key(i));
//    var parseIdea = JSON.parse(returnIdea);
//    prependIdea(parseIdea);
//  };
// };

// window.onload = function() {
//  pageLoad();
// };

// $('.to-do').on('click', 'h2', function() {
//   $(this).prop('contenteditable', true).focus();
//   $(this).focusout( function() {
//     var key = $(this).closest('article').attr('id')
//     var retrievedIdea = localStorage.getItem(key);
//     var parsedIdea = JSON.parse(retrievedIdea);
//     parsedIdea['title'] = $(this).html();
//     var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);
//     })
//   });


// $('.to-do').on('click', 'p', function() {
//   $(this).prop('contenteditable', true).focus();
//   $(this).focusout( function() {
//     var key = $(this).closest('article').attr('id')
//     var retrievedIdea = localStorage.getItem(key);
//     var parsedIdea = JSON.parse(retrievedIdea);
//     parsedIdea['body'] = $(this).html();
//     var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);
//     })
//   });


// $('.to-do').on('click', '.remove', function() {
//  $(this).closest('article').fadeOut(function() {
//    $(this).remove();
//  })
//  localStorage.removeItem($(this).closest('article').attr('id'));
// });

// $('.to-do').on('click', '.quality-up', function() {
  
//      var key = $(this).closest('article').attr('id')
//      var retrievedIdea = localStorage.getItem(key);
//      var parsedIdea = JSON.parse(retrievedIdea);

//   if (parsedIdea['quality'] === ('quality: swill')) {
//     $(this).closest('label').siblings('h3').text('quality: plausible');
//     parsedIdea['quality'] = 'quality: plausible';

//     var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);

//   } else if (parsedIdea['quality'] === ('quality: plausible')) {
//     $(this).closest('label').siblings('h3').text('quality: genius');
//     parsedIdea['quality'] = 'quality: genius';

//     var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);
//  } 
// });

// $('.to-do').on('click', '.quality-down', function() {
//     var key = $(this).closest('article').attr('id')
//     var retrievedIdea = localStorage.getItem(key);
//     var parsedIdea = JSON.parse(retrievedIdea);


//   if (parsedIdea['quality'] === ('quality: genius')) {
//     $(this).closest('label').siblings('h3').text('quality: plausible');
//     parsedIdea['quality'] = 'quality: plausible';

//     var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);


//   } else if (parsedIdea['quality'] === ('quality: plausible')) {
//    $(this).closest('label').siblings('h3').text('quality: swill');
//    parsedIdea['quality'] = 'quality: swill'


//    var stringifiedObject = JSON.stringify(parsedIdea);
//     localStorage.setItem(key, stringifiedObject);
//  } 
// });

