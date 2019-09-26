$('document').ready(() => {
    //#region lab 1
    $('.shape').on('mouseover', event => {
        $(event.currentTarget).addClass('highlight');
    });
    $('.shape').on('mouseleave', event => {
        $(event.currentTarget).removeClass('highlight');
    });
    $('.shape').on('click', event => {
        className = event.currentTarget.className;
        if (className.includes('small')) {
            $(event.currentTarget).hide();
        } else if (className.includes('medium')) {
            $(event.currentTarget).removeClass('medium').addClass('small');
        } else {
            $(event.currentTarget).removeClass('large').addClass('medium');
        }
    });
    //#endregion

    //#region lab 2
    $('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

    $('#button-1').on('click', (event) => {
        $("#green-container").toggle();
    });
    $('#button-2').on('click', (event) => {
        $("#button-message").fadeOut("slow");
    });
    $('#button-3').on('click', (event) => {
        $("#button-message").fadeIn("slow");
    });
    $('#button-4').on('click', (event) => {
        $("#green-container").slideUp("slow");
    });
    //#endregion

    //#region lab 3
    $(document).keydown(function (event) {
        if (event.key == "g") {
            $('.grey').toggle();
        }
        if (event.keyCode == 32) {
            $("#green-container").append('<div class="small blue circle shape"></div>');
        }
    });
    // $('#form-1 input[type=text]').on('input', event => {
    //     if (event.currentTarget.value.length > 14) {
    //         event.currentTarget.value = event.currentTarget.value.slice(0, 14);
    //     } else {
    //         const remain = 14 - event.currentTarget.value.length;
    //         $("#form-message").text(`${remain} characters remaining`);
    //     }
    // });
    //#endregion

    //#region lab 5
    $('#form-1 input[type=text]').on('input', event => {
        $("#form-message").text($('#form-1 input[type=text]').val().split('').reverse().join(''));
    });
    $('#orange-container').on('click', e => {
        $('#orange-container .red').remove();
    });
    //#endregion

});