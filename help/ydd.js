
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
        var time_delay = setTimeout(function() {
            if ($(".progress").css("width") == "0px") {
                add_class_for_table();
                key_kbd_init();
                assets_for_en();
                clearTimeout(time_delay);
            }
        }, 700*i);
    }
}

function add_class_for_table(){
    $('main').find('table').each(function(){
        var table_head = $(this).find('thead tr th');
        var blank_head_cols = 0;
        if (table_head) table_head.each(function(){
            //console.log($(this).index());//这个元素在同辈中的索引位置
            var col_n = $(this).index();
            if (col_n > 0 && $(this).text() == "") blank_head_cols++;
            if (blank_head_cols > 0 && blank_head_cols == table_head.length - 1) {
                table_head.each(function(){
                    var col_n = $(this).index();
                    if (col_n == 0) $(this).attr("colspan",blank_head_cols+1);
                    else $(this).remove();
                })
            }
        })
        $(this).find('tbody tr td').each(function(){
            //console.log($(this).index());//这个元素在同辈中的索引位置
            var col_n = $(this).index();
            $(this).addClass("col"+col_n)
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

function assets_for_en(){
    $('main').find('img').each(function(){
        var img_url = $(this).attr("src");
        if (img_url && img_url.indexOf("/en/") != -1 && img_url.indexOf("/assets/") != -1) {
            img_url = img_url.replace("/en/","/");
            $(this).attr("src", img_url);
        }
    })
}