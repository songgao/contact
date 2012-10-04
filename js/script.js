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
    if(settings.Tent && settings.Tent != "")
        $('head').prepend('<link href="' + settings.Tent + '" rel="https://tent.io/rels/profile" />');
    var name = settings.FirstName + ' ' + settings.LastName;
    $(document).attr('title', name);
    $('.title>h1').append(name);
    if(settings.TEL && settings.TEL != "") {
        var str = '<li><i class="icon-phone"></i> ' + settings.TEL + '</li>';
        $('#the_list').append(str);
    }
    if(settings.Email && settings.Email != "") {
        var str = '<li><a href="mailto:' + settings.FirstName + '%20' + settings.LastName + '&lt;' + settings.Email + '&gt;"><i class="icon-envelope-alt gmail"></i> ' + settings.Email + '</a></li>';
        $('#the_list').append(str);
    }
    if(settings.Tent && settings.Tent != "") {
        var str = '<li><a href="' + settings.Tent + '"><i class="icon-heart"></i> Tent</a></li>';
        ('#the_list').append(str);
    }
    if(settings.Twitter && settings.Twitter != "") {
        var str = '<li><a href="https://twitter.com/' + settings.Twitter + '"><i class="icon-twitter twitter"></i> Twitter: ' + settings.Twitter + '</a></li>';
        $('#the_list').append(str);
    }
    if(settings.GitHub && settings.GitHub != "") {
        var str = '<li><a href="https://github.com/' + settings.GitHub + '"><i class="icon-github-sign"></i> GitHub: ' + settings.GitHub + '</a></li>';
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
