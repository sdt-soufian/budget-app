$(window).on('load', function () {
    var id = 0;
    var msgError = new jBox('Modal', {
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
            msgError.toggle();
        }
        else {
            $('#budget-price').text($('#budget').val());
            $('#balance-price').text($('#budget').val());
        }

    })

    $('#btn-expense').on('click', function (event) {
        event.preventDefault();
        if ($('#expense-text').val() == '' || $('#Amount').val() < 0 || $('#Amount').val() == '') {
            console.log($(this));
            msgError.toggle();
        }
        else {
            const tr = $('<tr>');
            const chaine = `
    <td>${$('#expense-text').val()}</td>
    <td>${$('#Amount').val()}</td>
    <td>
        <button value="${id++}" class="btn-style edit-color"><i class="fas fa-edit"></i></button>
        <button value="${id++}" class="btn-style delete-color"><i class="fas fa-trash"></i></button>
    </td>`
            tr.html(chaine);
            $('tbody').append(tr);
        }

    })

})
