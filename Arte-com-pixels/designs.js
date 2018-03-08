function makeGrid(inputHeight, inputWidth) {
    var grid = jQuery('#pixelCanvas tbody'),
        output = '',
        tdOutput = '';

    grid.empty();

   
    for (var i = 0; i < inputWidth; i++) {
        tdOutput += '<td></td>';
    }

    for (var i = 0; i < inputHeight; i++) {
        output += '<tr>' + tdOutput + '</tr>';
    }

    grid.html(output);
}

jQuery(document).ready(function($) {

    
    $('#sizePicker').on('submit', function(event) {
        event.preventDefault();

        var inputHeight = 0,
            inputWidth = 0;

        inputHeight = $(this).find('#inputHeight').val();
        inputWidth = $(this).find('#inputWidth').val();

        makeGrid(inputHeight, inputWidth);

        return false;
    });

    
    $('#pixelCanvas').on('click', 'td', function(event) {
        event.preventDefault();

        var color = 'none';

        if (!$(this).hasClass('painted')) {
            color = $('#colorPicker').val();
        }

        $(this).css('background', color).toggleClass('painted');
    });

});
