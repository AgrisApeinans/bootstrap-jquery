(function($,window) {
    var plugin = function(event){
        event.preventDefault();
        $(".blur-all").toggle();
        $(this).parent().toggleClass("is-lightbox");
        var text = $(this).find(".content-block-img-label").text();
        $(this).find(".content-block-img-label").text(
                text == "Click to read on" ? "Click again to close" : "Click to read on");
        }

    window.lightbox = plugin;
}(jQuery,window));
