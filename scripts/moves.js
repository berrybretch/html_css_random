"use strict";
let row = [] ;
let pos = [] ;
$('tr').each(function(){
    row.push(this)})
function path(x, y, z = 0){
    if (z == 0 ) {
        $(row[x-1]).children('td').eq(y-1).css('background-color', 'blue')
    }else if(z != 0){
        $(row[x-1]).children('td').eq(y-1).css('background-color', '')
    }
}
function path(arr){
    $(row[arr[0]-1]).children('td').eq(arr[1]-1).css('background-color', 'blue')
}
function clear_board(){
    for (var i = 0; i < row.length; i++) {
        $(row[i]).children('td').each(
            function(){
                $(this).css('background-color', '')
            }
        )
    }
}

function rook_like_test(pos_arr){
    clear_board()
    path(pos_arr)
    for (var i = 0; i < 8; i++) {
        path(pos_arr[0], i)
    }
    for (var j = 0; j < 8; j++) {
        path(j, pos_arr[1])
    }
}
//random_comment
