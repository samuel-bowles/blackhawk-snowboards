document.addEventListener("DOMContentLoaded", function() {

	let thumbs = document.querySelectorAll(".shop-small");
	let bigPic = document.querySelector(".shop-large");

	let captionsJp = ["当店のあるメインストリート。",  "ゆっくりコーヒーもお楽しみいただけます。", "冬の夜の大通り。", "リゾートビレッジの屋上からの風景。"]
	let captionsEn = ["The main street with our store.",  "Enjoy a relaxing coffee.", "The main street at night.", "View of the resort village."]
	let lang = document.getElementsByTagName('html')[0].getAttribute('lang');

	thumbs.forEach(function(element) {
		element.addEventListener("click", function(event) {
			
			for (let i = 0; i < thumbs.length; i++) {
				thumbs[i].classList.remove("selected")
			}
			this.classList.add("selected");

			let captions;
			if (lang == "ja") {
				captions = captionsJp
			} else if (lang == "en") {
				captions = captionsEn
			} else {
				return false;
			}

			let clickedElemId = event.target.id;
			
			changeSource(clickedElemId, bigPic, captions);
		})
	})

	function changeSource(clickedElemId, bigPicElem, captions) {
		clickedElemId = clickedElemId.slice(-1);
		let newSrc = bigPicElem.src.slice(0, -5) + clickedElemId + ".jpg";
		bigPicElem.src = newSrc;
		
		let figCap = document.querySelector(".large-figcap");
		figCap.innerText = captions[clickedElemId -1];
	}
});
	