$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();

    // Get the form data
    var formData = {
      'name': $('input[name=name]').val(),
      'email': $('input[name=email]').val(),
      'destination': $('#destination option:selected').text(),
      'travelers': $('input[name=travelers]').val(),
      'budget': $('input[name=budget]').val(),
      'currency': $('input[name=currency]').val()
    };

    // Send the form data to the server
    $.ajax({
      type: 'POST',
      url: '/submit',
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function(response) {
        // Clear the form fields
        $('input[name=name]').val('');
        $('input[name=email]').val('');
        $('#destination').prop('selectedIndex', 0);
        $('input[name=travelers]').val('');
        $('input[name=budget]').val('');
        $('input[name=currency]').val('');

        // Show a success message
        alert('Form submission successful');
      },
      error: function(error) {
        // Show an error message
        alert('Error submitting form');
      }
    });
  });
});
