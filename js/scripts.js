$('.title').on('input', enableSaveBtn); 
$('.task').on('input', enableSaveBtn);
$('.save-btn').on('click', grabValue);
$('.to-do').on('click', '.remove', removeTask);
$('.to-do').on('click', '.title', editTitle);
$('.to-do').on('click', '.task', editTask);
$('.to-do').on('click', '.level-up', levelHigh);
// $('.to-do').on('click', '.level-down', levelLow);

function getLocalStorageKey(){
  var key = $(this).closest('article').attr('id');
  var retrievedKey = localStorage.getItem(key);
  var parsedKey = JSON.parse(retrievedKey);
  levelHigh(parsedKey);
  levelLow(parsedKey);
};

function setLocalStorageKey(parsedKey){
  var stringifiedObject = JSON.stringify(parsedKey);
  localStorage.setItem(parsedKey, stringifiedObject);
}

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
    `<article id="${newTask.id}">
      <h2 class="title">${newTask.title}</h2>
      <button class="remove button"></button>
      <p class="task">${newTask.task}</p>
      <button class="level-up button" name="quality-up-button">
      </button>
      <button class="level-down button" name="quality-down-button"></button>
      <h3>${newTask.level}</h3>
    </article>`
  );
};

function clearInput(){
  $('.title').val('');
  $('.task').val('');
  $('.save-btn').attr('disabled', true);
}

function removeTask() {
  $(this).parent().remove();
  localStorage.removeItem($(this).closest('article').attr('id'));
}

function editTitle() {
  $(this).prop('contenteditable', true).focus();
  $(this).focusout(function() {
    var key = $(this).closest('article').attr('id')
    var retrievedTitle = localStorage.getItem(key);
    var parsedTitle = JSON.parse(retrievedTitle);
    parsedTitle.title = $(this).html();
    var stringifiedObject = JSON.stringify(parsedTitle);
    localStorage.setItem(key, stringifiedObject);
  });
};

function editTask(){
  $(this).prop('contenteditable', true).focus();
  $(this).focusout(function() {
    var key = $(this).closest('article').attr('id')
    var retrievedTask = localStorage.getItem(key);
    var parsedTask = JSON.parse(retrievedTask);
    parsedTask.task = $(this).html();
    var stringifiedObject = JSON.stringify(parsedTask);
    localStorage.setItem(key, stringifiedObject);
  });
};

//current working section-- changing quality section

// function levelHigh(parsedKey){
//   if (parsedKey.level === ('level: normal')) {
//     $(this).closest('.level-up').siblings('h3').text('level: high');
//     parsedKey.level = 'level: high';
//   } else if (parsedKey.level === ('level: high')) {
//     $(this).closest('level').siblings('h3').text('level: critical');
//     parsedKey.level = 'level: critical';
//   } 
//   setLocalStorageKey(parsedKey);
// };





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


$('#filter').on('keyup', function() {
  var searchRequest = $('#filter').val();
  $('article').each(function(){
    var searchResult = $(this).text().indexOf(searchRequest);
    this.style.display = searchResult > -1 ? "" : "none";
  })
})
