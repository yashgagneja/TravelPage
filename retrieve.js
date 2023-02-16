$(document).ready(function() {
    // Retrieve the form submissions from the server
    $.ajax({
      type: 'GET',
      url: '/retrieve',
      success: function(response) {
        // Display the form submissions on the page
        var submissions = response.submissions;
        var submissionsList = $('#submissions');
        for (var i = 0; i < submissions.length; i++) {
          var submission = submissions[i];
          var listItem = $('<li></li>');
          listItem.text(submission.name + ' (' + submission.email + ') wants to go to ' +
                        submission.destination + ' with ' + submission.travelers + ' travelers, with a budget of ' +
                        submission.currency + ' ' + submission.budget + ' per person.');
          submissionsList.append(listItem);
        }
      },
      error: function(error) {
        // Show an error message
        alert('Error retrieving form submissions');
      }
    });
  });
  