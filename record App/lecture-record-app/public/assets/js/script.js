function trigger(selector){
    $(selector).trigger("click");
}

function check(selector, area){
    var file = $(selector).val();
    var html;
    if(file == ""){
        html = '<img width="50" height="50" src="assets/android-cloud-outline.svg">';
    } else {
        html = '<img width="50" height="50" src="assets/checkmark-circled.svg">';
    }
    $(area).html(html);
}
