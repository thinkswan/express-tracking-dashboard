$(function() {
  var socket = io();
  var containerEl = $('.visits');

  socket.on('visit', function(visit) {
    var newItem = '<div class="visit">';
    newItem += '<span class="date">' + moment().format('MMMM Do YYYY, HH:mm:ss') + '</span>';
    newItem += '<span class="ip">' + visit.ip + '</span>';
    newItem += '<span class="ua">' + visit.ua + '</span></div>';
    containerEl.append(newItem);
  });
});
