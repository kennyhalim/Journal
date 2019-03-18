import './styles.css';
import { Entry } from './entry';

$(document).ready(function() {
  $('#journalForm').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    $("#solution").text(newEntry.numWords());
    $("#solution").append("<p>" + newEntry.vowelCount() + "</p>");
    $("#solution").append("<p>" + newEntry.consonantCount() + "</p>");
    $("#solution").append("<p>" + newEntry.firstSentence() + "</p>");

  });
});
