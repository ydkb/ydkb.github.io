
$(function() {
    var sub_string = document.location.search.substring(1);
    var old_url = window.location.href;
    //Temporarily use
    if (sub_string == "hhkb") {
        window.location.href=old_url.replace("?hhkb","#/kb-mods/hhkb-ble")
    } else if (sub_string == "660c") {
        window.location.href=old_url.replace("?660c","#/kb-mods/ble660c_980c")
    } else if (sub_string == "980c") {
        window.location.href=old_url.replace("?980c","#/kb-mods/ble660c_980c")
    } else  if (sub_string == "980m") {
        window.location.href=old_url.replace("?980m","#/kb-mods/ble980m")
    }  
    $(document).ready(function(){
        optimizing_content();
    })
    window.onhashchange = function () {
        optimizing_content();
    } 
})

function optimizing_content(){
    for (var i=0; i<10; i++) {
        setTimeout(function() {
            add_class_for_table();
            key_kbd_init();
        }, 700*i);
    }
}

function add_class_for_table(){
    $('main').find('table').each(function(){
        $('thead tr').find('th').each(function(){
            //console.log($(this).index());//这个元素在同辈中的索引位置
            var _col_n = $(this).index();
            $(this).addClass("col"+_col_n)
        })
        $('tbody tr').find('td').each(function(){
            //console.log($(this).index());//这个元素在同辈中的索引位置
            var _col_n = $(this).index();
            $(this).addClass("col"+_col_n)
        })
    })
}  

function key_kbd_init(){
    $('main').find('kbd,key').each(function(){
        var _keys = $(this).text().split("+");
        var _kbd_content = '';
        for (var i=0; i<_keys.length; i++) {
            _kbd_content += "<kbd>" + _keys[i] + "</kbd>";
            if (i != _keys.length - 1) _kbd_content += "+";
        }
        $(this).replaceWith(_kbd_content);
    })
}