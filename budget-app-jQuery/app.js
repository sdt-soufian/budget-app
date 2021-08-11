$(window).on('load', function () {
    var price = $('#Amount');
    var idInc = 0;
    var sumExpence = 0;
    var tabItems = [];
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
        if ($('#expense-text').val() == '' || price.val() < 0 || price.val() == '') {
            console.log($(this));
            msgError.toggle();
        }
        else {
            sumExpence += parseInt(price.val());
            $('#expences-price').text(sumExpence);
            $('#balance-price').text(parseInt($('#budget').val()) - parseInt(price.val()))
            var expence = $('#expense-text').val();
            var titleExpense = price.val();
            console.log(expence, titleExpense);
            var objItems = {
                id: idInc++,
                valeur:  titleExpense,
                titreExpense: expence
            }
            tabItems.push(objItems);
            const tr = $('<tr>');
            const chaine = `
    <td>${objItems.valeur}</td>
    <td>${objItems.titreExpense}</td>
    <td>
        <button value="${objItems.id}" class="btn-style edit-color"><i class="fas fa-edit"></i></button>
        <button value="${objItems.id}" class="btn-style delete-color"><i class="fas fa-trash"></i></button>
    </td>`
            tr.html(chaine);
            $('tbody').append(tr);
        }

    })
    $('tbody').on('click', 'button', function(){
        if($(this).hasClass('edit-color')){
            console.log(typeof(sumExpence), sumExpence);
            var getId = $(this).attr('value');
            var getElet = tabItems.filter(elet => elet.id == getId)
            sumExpence -= parseInt(getElet[0].valeur);
            console.log(sumExpence);
            $('#expences-price').text(sumExpence);
            $('#balance-price').text(parseInt($('#balance-price').text()) + parseInt(getElet[0].valeur))

        }
        else if($(this).hasClass('delete-color')){
            var getId = $(this).attr('value');
            var getElet = tabItems.filter(elet => elet.id == getId)
            console.log(getElet[0]);
        }
    })

})
