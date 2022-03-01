document.addEventListener("DOMContentLoaded", function() {
    
    let viewButtons = document.querySelectorAll(".board-viewer-button");
    function addClick() {
        viewButtons.forEach(function(element) {
            element.addEventListener("click", function(event) {
                openModal();
                addViewer();
                let modelSrc = this.href;
                setSource(modelSrc);
                event.preventDefault();
                return false;
            })
        })
    }

    function openModal() {
        let pageBody = document.querySelector("body");
        pageBody.innerHTML += '<div id="bg"></div>';
        pageBody.innerHTML += '<div id="viewer"></div>';
        document.querySelector("#bg").addEventListener("click", function(event) {
            document.querySelector("#bg").remove();
            document.querySelector("#viewer").remove();
        })
    }

    function addViewer() {
        let viewer = document.querySelector("#viewer");
        viewer.innerHTML += "<model-viewer style='width: 100%; height: 100%' auto-rotate camera-controls shadow-intensity='1'></model-viewer";
    }

    function setSource(modelSrc) {
        let viewer = document.querySelector("model-viewer");
        viewer.src = modelSrc;
    }

    addClick();
});