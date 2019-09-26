$('document').ready(() => {
    console.log('The Page is ready');
    $('.blue.circle').on('mouseenter', (event) => {
        console.log('Blue Circle: Go Away!');
    });
    $('.blue.circle').on('mouseleave', (event) => {
        console.log('Blue Circle: Goodbye!');
    });
    $('#button-1').on('click', (event) => {
        console.log('button-1 click');
    });
    $('#button-2').on('click', (event) => {
        $('#button-2').attr('disabled', true);
    });
    $('#button-3').on('click', (event) => {
        $("#button-message").text("button 3 was clicked");
    });
    $('tr').on('mouseenter', function (event) {
        $(this).addClass("highlight");
    });
    $('tr').on('mouseleave', function (event) {
        $(this).removeClass("highlight");
    });
})