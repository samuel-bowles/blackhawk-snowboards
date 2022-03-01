$(function() {
    $(".3d-view").click(function() {
        $("body").append('<div id="bg"></div>');
        $("body").append('<div id="viewer"></div>');

        $("#bg").hide();
        $("#viewer").hide();

        $("#viewer").html("<model-viewer style='width: 100%; height: 100%' auto-rotate camera-controls shadow-intensity='1'></model-viewer")
        $("#viewer model-viewer").attr("src", $(this).attr("href"));
        
        $("#bg").fadeIn();
        $("#viewer").fadeIn();

        $("#bg").click(function() {
            $(this).fadeOut(function() {
                $(this).remove();
            });
            $("#viewer").fadeOut(function() {
                $(this).remove();
            });
        })

        return false;
    });
});