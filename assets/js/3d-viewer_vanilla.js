let viewButtons = document.querySelectorAll(".board-viewer-button");


viewButtons.forEach(function(element) {    
    element.addEventListener("click", function(event) {
        event.preventDefault();
        
        let modelSrc = this.href;

        let pageBody = document.querySelector("body");
        pageBody.insertAdjacentHTML("beforeend", `<div id="bg" class="fadeIn"><div id="viewer" class="fadeIn"><model-viewer style="width: 100%; height: 100%"; src="${modelSrc}" class="fadeIn" auto-rotate camera-controls shadow-intensity="1"></model-viewer></div></div>`)
        
        document.querySelector("#viewer").addEventListener("click", function(event) {
            event.stopPropagation();
        })

        document.querySelector("#bg").addEventListener("click", function() {
            let bg = document.querySelector("#bg");
            let viewer = document.querySelector("#viewer");

            bg.classList.add("fadeOut");
            viewer.classList.add("fadeOut");

            setInterval(remove, 500, bg, viewer)

            function remove(elem1, elem2) {
                elem1.remove();
                elem2.remove();
            }
        })
    })
})
