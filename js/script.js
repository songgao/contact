function generate_qr(){
    var str = 'MECARD:';
    str += 'N:' + "Gao" + ',' + "Song" + ';';
    str += 'TEL:' + "+1(650)200-0915" + ';';
    str += 'EMAIL:' + "song@gao.io" + ';';
    str += 'URL:' + "song.gao.io" + ';';
    str += 'ADR:,' + "3101 Shelby Center, Auburn University, Auburn, AL 36849, United States" + ';';
    str += ';';
    $('#qr').qrcode(str);
}

function load_resume() {
}

$(document).ready(function() {
    generate_qr();
    load_resume();
    $('#btn-qr').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
    });
    $('#btn-resume').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
    });
    $("#content").fadeIn(1000);
});
