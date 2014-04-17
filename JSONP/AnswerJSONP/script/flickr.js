// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    $('#searchButton').on('click', function() {
        var keyword = $('#keyword').val();
        var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=' + keyword;
        var script = $('<script/>').attr({src: url});
        $('head').append(script);
    });

}

function drawImg(result) {
    var imgUrl = result.items[0].media.m;
    var img = $('<img>').attr({src: imgUrl});
    $('#resultArea').append(img);
}
