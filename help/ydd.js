
$(function() {
    if (window.location.href.indexOf("http://ydkb.io") != -1) {
        var old_url = window.location.href;
        window.location.href=old_url.replace("http","https")
    }
    $(document).ready(function(){
        add_class_for_table();
        key_kbd_init();
    })
    window.onhashchange = function () {
        add_class_for_table();
        key_kbd_init();
    } 
})


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