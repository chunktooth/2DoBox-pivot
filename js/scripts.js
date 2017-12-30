$('.title').on('input', enableSaveBtn); 
$('.task').on('input', enableSaveBtn);
$('.save-btn').on('click', grabValue);


function enableSaveBtn(e) {
  e.preventDefault();
  if($('.title').val() && $('.task').val()) {
    $('.save-btn').attr('disabled', false);
  } else {
    $('.save-btn').attr('disabled', true);
  }
};


function Task (id, title, task) {
  this.id = id;
  this.title = title;
  this.task = task;
  this.level = 'level: normal';
}

function grabValue(e){
  e.preventDefault();
  var newTask = new Task (Date.now(), $('.title').val(), $('.task').val());
  storeInfo(newTask);
  showTask(newTask);
  clearInput();
};


function storeInfo(newTask) {
  var stringifiedTask = JSON.stringify(newTask);
  localStorage.setItem(newTask.id, stringifiedTask);
};

window.onload = function() {
 persistRefresh();
};

function persistRefresh() {
 for (var i = 0; i < localStorage.length; i++) {
   var retrievedInfo = localStorage.getItem(localStorage.key(i));
   var parsedInfo = JSON.parse(retrievedInfo);
   showTask(parsedInfo);
 };
};

function showTask(newTask) {
  $('.to-do').append(
    `<article id="${newTask.id}"><h2>${newTask.title}</h2><label for="remove-button"><button class="remove button"></button></label><p>${newTask.task}</p><label for="quality-up-button" class="upL"><button class="quality-up button" name="quality-up-button"></button></label><label for="quality-down-button" class="downL"><button class="quality-down button" name="quality-down-button"></button></label><h3>${newTask.level}</h3></article>`
  );
};

function clearInput(){
  $('.title').val('');
  $('.task').val('');
  $('.save-btn').attr('disabled', true);
}

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


// $('#filter').on('keyup', function() {
//   var searchRequest = $('#filter').val();
//   $('article').each(function(){
//     var searchResult = $(this).text().indexOf(searchRequest);
//     this.style.display = searchResult > -1 ? "" : "none";
//   })
// })
