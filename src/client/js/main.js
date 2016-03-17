// increment question score on page and in db on arrow click
$(document).on('click', '.vote-up-q', function(e) {
  // target vote number
  var count = $(this).next();
  // get id of current question
  var questionId = count.attr('id');
  // update count on page
  var currentCount = $(count[0]).html();
  var countUp = (Number(currentCount) + 1);
  $(count[0]).html(countUp);
  // send request to update database for question's vote count
  $.ajax({
    url: '/questions/' + questionId + '/voteup',
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});

// decrement question score on page and in db on arrow click
$(document).on('click', '.vote-down-q', function(e) {
  // target vote number
  var count = $(this).prev();
  // get id of current question
  var questionId = count.attr('id');
  // update count on page
  var currentCount = $(count[0]).html();
  var countDown = (Number(currentCount) - 1);
  $(count[0]).html(countDown);
  // send request to update database for question's vote count
  $.ajax({
    url: '/questions/' + questionId + '/votedown',
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});

//increment answer score on page and in db on arrow click
$(document).on('click', '.vote-up-a', function(e) {
  // target vote number
  var count = $(this).next();
  // get id of current question
  var answerId = count.attr('id');
  // update count on page
  var currentCount = $(count[0]).html();
  var countUp = (Number(currentCount) + 1);
  $(count[0]).html(countUp);
  // send request to update database for question's vote count
  $.ajax({
    url: '/answers/' + answerId + '/voteup',
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});

// decrement question score on page and in db on arrow click
$(document).on('click', '.vote-down-a', function(e) {
  // target vote number
  var count = $(this).prev();
  // get id of current question
  var answerId = count.attr('id');
  // update count on page
  var currentCount = $(count[0]).html();
  var countDown = (Number(currentCount) - 1);
  $(count[0]).html(countDown);
  // send request to update database for question's vote count
  $.ajax({
    url: '/answers/' + answerId + '/votedown',
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});


// allow users to subscribe, hide subscribe button, show unsubscribe button
$('#subscribe').on('click', function() {
  $(this).toggleClass('form-hidden');
  $('#unsubscribe').toggleClass('form-hidden');
  var location = window.location.href;
  var locArray = location.split('/');
  var idIndex = (Number(locArray.indexOf('questions')) + 1);
  var id = locArray[idIndex];
  $.ajax({
    url: '/subscribe/' + id,
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});

// allow users to unsubscribe, hide unsubscribe button, show subscribe button
$('#subscribe').on('click', function() {
  $(this).toggleClass('form-hidden');
  $('#subscribe').toggleClass('form-hidden');
  var location = window.location.href;
  var locArray = location.split('/');
  var idIndex = (Number(locArray.indexOf('questions')) + 1);
  var id = locArray[idIndex];
  $.ajax({
    url: '/unsubscribe/' + id,
    method: 'post',
    success: function(result) {
      console.log(result);
    }
  });
});


var converter = new showdown.Converter();
// convert question and answer body text to markdown on render
$(document).ready(function () {
  var markdownText = document.getElementsByClassName('markdown-text');
  console.log(markdownText);
  for (i = 0; i < markdownText.length; i++) {
    console.log(i);
    var currentHTML = $(markdownText[i]).html();
    var markedText = converter.makeHtml(currentHTML);
    $(markdownText[i]).html(markedText);
  }

$("#weeks option:selected", function() {
  var cool = $("#mySelectBox option:selected").text();
  console.log(cool);
 });


});
