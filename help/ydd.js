
$(function() {
    var short_url = [
        {short:"hhkb",  long:"#/kb-mods/hhkb-ble"},
        {short:"660c",  long:"#/kb-mods/ble660c_980c"},
        {short:"980c",  long:"#/kb-mods/ble660c_980c"},
        {short:"980m",  long:"#/kb-mods/ble980m"},
        {short:"kbd67", long:"#/keyboards/yd67ble"},
    ]
    var sub_string = document.location.search.substring(1);
    var old_url = window.location.href;
    var display_lang = (old_url.indexOf('#/en/') != -1)? " English":" 中文";
    var get_lang = navigator.userLanguage || navigator.language || navigator.bowserLanguage;

    //Temporarily use
    for (var i=0; i<short_url.length; i++) {
        if (sub_string == short_url[i].short) {
            window.location.href=old_url.replace("?"+sub_string, short_url[i].long.replace("#/","#/"+(get_lang.toLowerCase() == "zh-cn"? "":"en/")));
            break;
        }
    }

    $(document).ready(function(){
        optimizing_content();
    })
    window.onhashchange = function () {
        optimizing_content();
        old_url = window.location.href;
    }
    $('.app-nav').on('click',"li",function () {
        if ($(this).text() == " 中文" || $(this).text() == " English") {
        var click_lang = $(this).text();
            if (click_lang != display_lang) {
                display_lang = click_lang;
                if (old_url.indexOf('#/en/') != -1) {
                    $("#display-lang-en").hide();
                    window.location.href=old_url.replace("#/en/","#/")
                } else {
                    $("#display-lang-cn").hide();
                    window.location.href=old_url.replace("#/","#/en/")
                }
            }
        }
    }) 
})

function optimizing_content(){
    for (var i=0; i<10; i++) {
        var time_delay = setTimeout(function() {
            //页面载入完成
            if ($(".progress").css("width") == "0px") {
                assets_for_en();
                lang_icon();
                clearTimeout(time_delay);
            }
        }, 700*i);
    }
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

function lang_icon(){
    if (window.location.href.indexOf('#/en/') != -1) {
        $("#display-lang-en").show();
    } else {
        $("#display-lang-cn").show();
    }
}