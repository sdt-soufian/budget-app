$(window).on('load', function () {
    var msg = new jBox('Modal', {
        content: 'Error budget positive and great than 0',
        //attach: '#btn-budget',
        title: 'Error message',
        draggable: 'title',
        overlay: false,
        repositionOnOpen: false,
        repositionOnContent: false,
        position: {
            x: 25,
            y: 10
          }
    });
    $('#btn-budget').on('click', function (event) {
        event.preventDefault();
        if ($('#budget').val() == '' || $('#budget').val() < 0) {
            console.log($(this));
            msg.toggle();
        }

    })

    $('#btn-expense').on('click', function (event) {
        event.preventDefault();
        if ($('#expense-text').val() == '' || $('#Amount').val() < 0 || $('#Amount').val() == '') {
            console.log($(this));
            msg.toggle();
        }

    })

})
