$('.title').on('input', enableSaveBtn); 
$('.task').on('input', enableSaveBtn);
$('.save-btn').on('click', grabValue);
$('.to-do').on('click', '.remove', removeTask);
$('.to-do').on('click', '.title', editTitle);
$('.to-do').on('click', '.task', editTask);
$('.to-do').on('click', '.level-up', levelUp);
$('.to-do').on('click', '.level-down', levelDown);
$('.filter').on('keyup', filterText);
$('.to-do').on('click', '.completed-task', strikeText);

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
      <button class="level-up button">
      </button>
      <button class="level-down button"></button>
      <h3>${newTask.level}</h3>
      <button class="completed-task">Completed Task</button>
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

function retrieveKey(event){
  var key = event.target.closest('article').id;
  var retrievedKey = localStorage.getItem(key);
  var parsedKey = JSON.parse(retrievedKey);
  return parsedKey;
};

function setKey(parsedKey){
  var stringifiedObject = JSON.stringify(parsedKey);
  localStorage.setItem(parsedKey.id, stringifiedObject);
}

function editTitle() {
  $(this).prop('contenteditable', true).focus();
  $(this).focusout(function() {
    var parsedKey = retrieveKey(event);
    parsedKey.title = $(this).html();
    setKey(parsedKey);
  });
};

function editTask(){
  $(this).prop('contenteditable', true).focus();
  $(this).focusout(function() {
    var parsedKey = retrieveKey(event);
    parsedKey.task = $(this).html();
    setKey(parsedKey);
  });
};

function levelDown() {
  var parsedKey = retrieveKey(event);
  var changeText = $(this).closest('.level-down').siblings('h3');
  if (parsedKey.level === ('level: critical')) {
    changeText.text('level: high');
    parsedKey.level = 'level: high';  
  } else if (parsedKey.level === ('level: high')) {
    changeText.text('level: normal');
    parsedKey.level = 'level: normal';
  } else if (parsedKey.level === ('level: normal')) {
    changeText.text('level: low');
    parsedKey.level = 'level: low';
  } else if (parsedKey.level === ('level: low')) {
    changeText.text('level: none');
    parsedKey.level = 'level: none';
   }
  setKey(parsedKey);
}

function levelUp() {
  var parsedKey = retrieveKey(event);
  var changeText = $(this).closest('.level-up').siblings('h3');
    if (parsedKey.level === ('level: none')) {
    changeText.text('level: low');
    parsedKey.level = 'level: low';
   } else if (parsedKey.level === ('level: low')) {
    changeText.text('level: normal');
    parsedKey.level = 'level: normal';
  } else if (parsedKey.level === ('level: normal')) {
    changeText.text('level: high');
    parsedKey.level = 'level: high';
  } else if (parsedKey.level === ('level: high')) {
    changeText.text('level: critical');
    parsedKey.level = 'level: critical';
  } 
  setKey(parsedKey);
}

function filterText(){
  var searchRequest = $('.filter').val().toLowerCase();
  $('article').each(function(){
    var searchResult = $(this).text().indexOf(searchRequest);
    this.style.display = searchResult > -1 ? "" : "none";
  });
};

function strikeText() {
  var parsedKey = retrieveKey(event);
  var changeTitle = $(this).closest('.completed-task').siblings('h2');
  console.log(changeTitle);
  // var titleStrike = parsedKey.title;
  // var taskStrike = parsedKey.task;
  // changeTitle.addClass('.strike-text');
  // taskStrike.addClass('.strike-text');
  setKey(parsedKey);
}
