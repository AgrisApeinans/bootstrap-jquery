(function($,window) {
    var plugin = function(event){
        event.preventDefault();
        $(".blur-all").toggle().toggleClass("fade-in-fast");
        var text = $(this).find(".content-block-img-label").text();
        $(this).parent().toggleClass("fade-in-fast is-lightbox").scrollTop(0);
        $(this).find(".content-block-img-label").text(
                text == "Click to read on" ? "Click again to close" : "Click to read on");
        }

    window.lightbox = plugin;
}(jQuery,window));
