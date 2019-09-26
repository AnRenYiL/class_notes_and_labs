// These are some event handlers to make the demo work well.
// Don't change them unless you know what you're doing!

$(document).ready(function () {

  $('#reset').click(function () {
    document.location.reload();
  });
  //#region lab 4
  $('form').submit(function (event) {
    event.preventDefault();
    $('#form-message').append($('#form-1 input[type=text]').val());
    let count = 0;
    for (const item of $('.shape')) {
      if ($(item).hasClass($('#form-1 input[type=text]').val())) {
        item.remove();
        count++;
      }
    }
    if (count == 0) {
      alert('Entered color is not a valid option!');
    }
    $('#form-1 input[type=text]').val('');
  });

  //#endregion
});