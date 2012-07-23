function generate_qr(){
    var str = 'MECARD:';
    str += 'N:' + settings.LastName + ',' + settings.FirstName + ';';
    str += 'TEL:' + settings.TEL + ';';
    str += 'EMAIL:' + settings.Email + ';';
    str += 'URL:' + settings.URL + ';';
    str += 'ADR:,' + settings.Street_1 + ',' + settings.Street_2 + ',' + settings.City + ',' + settings.State + ',' + settings.ZIP + ',' + settings.Country + ';';
    str += ';';
    $('#qr').qrcode(str);
}

function generate_items(){
    var name = settings.FirstName + ' ' + settings.LastName;
    $(document).attr('title', name);
    $('.title>h1').append(name);
    if(settings.TEL) {
        var str = '<li><i class="icon-phone"></i> ' + settings.TEL + '</li>';
        $('#the_list').append(str);
    }
    if(settings.Email) {
        var str = '<li><a href="mailto:' + settings.FirstName + '%20' + settings.LastName + '&lt;' + settings.Email + '&gt;"><i class="icon-envelope-alt gmail"></i> ' + settings.Email + '</a></li>';
        $('#the_list').append(str);
    }
    for(var item_index in settings.Items) {
        var item = settings.Items[item_index];
        var str = '<li>';
        if(item.href)
            str += '<a href="' + item.href + '">';
        str += '<i class="' + item.icon + '"';
        if(item.icon_color)
            str += 'style="color: ' + item.icon_color + '"';
        str += '></i>'
        str += ' ' + item.text;
        if(item.href)
            str += '</a>';
        str += '</li>';
        $('#the_list').append(str);
    }
    generate_qr();
}

$(document).ready(function() {
    generate_items();
    $('#btn-qr').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
    });
    $("#content").fadeIn(1000);
});
