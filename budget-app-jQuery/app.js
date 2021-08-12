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
            msgError.toggle();
        }
        else {
            $('#budget-price').text($('#budget').val());
            $('#balance-price').text($('#budget').val());
            $('#budget').val('');
        }

    })

    $('#btn-expense').on('click', function (event) {
        event.preventDefault();
        if ($('#expense-text').val() == '' || price.val() < 0 || price.val() == '') {
            msgError.toggle();
        }
        else {
            sumExpence += parseInt(price.val());
            $('#expences-price').text(sumExpence);
            $('#balance-price').text(parseInt($('#balance-price').text()) - parseInt(price.val()))
            var expence = price.val();
            var titleExpense = $('#expense-text').val();
            var objItems = {
                id: idInc++,
                valeur:  expence,
                titreExpense: titleExpense
            }
            tabItems.push(objItems);
            const tr = $('<tr>');
            const chaine = `
    <td>${objItems.titreExpense}</td>
    <td>${objItems.valeur}</td>
    <td>
        <button value="${objItems.id}" class="btn-style edit-color"><i class="fas fa-edit"></i></button>
        <button value="${objItems.id}" class="btn-style delete-color"><i class="fas fa-trash"></i></button>
    </td>`
            tr.html(chaine);
            $('tbody').append(tr);
            $('#expense-text').val('');
            price.val('');
        }

    })
    $('tbody').on('click', 'button', function(){
        if($(this).hasClass('delete-color')){
            var getId = $(this).attr('value');
            var getElet = getEletFromTab(getId);
            setPrices(getElet);
            deleteItem(getId);
            $(this).parent().parent().remove();
        }
        else if($(this).hasClass('edit-color')){
            var getId = $(this).attr('value');
            var getElet = getEletFromTab(getId);
            $('#expense-text').val(`${getElet.titreExpense}`);
            $('#Amount').val(`${getElet.valeur}`);
            var getElet = getEletFromTab(getId);
            setPrices(getElet);
            deleteItem(getId);
            $(this).parent().parent().remove();
        }
    })

    function getEletFromTab(id){
        var elet = tabItems.filter(elet => elet.id == id);
        return elet[0];
    }

    function setPrices(element){
        var pBalance = parseInt($('#balance-price').text());
        sumExpence -= parseInt(element.valeur);
        pBalance += parseInt(element.valeur);
        $('#expences-price').text(sumExpence);
        $('#balance-price').text(pBalance.toString());
    }

    function deleteItem(indice){
        var tempList = tabItems.filter(elet => elet.id !== parseInt(indice));
        tabItems = tempList;
        console.log(tabItems);
    }

})
