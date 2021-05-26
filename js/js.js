const OVERLAY = document.querySelector("body > tp-yt-iron-overlay-backdrop")
const SIM_BUTTON = document.querySelector(".style-scope .yt-button-renderer .style-blue-text .size-default")
const PLAY_BUTTON = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button")

setInterval(()=>{
	if(OVERLAY){
		OVERLAY.click()
		console.log("SIM, Continuar assistindo!!!")
	}
}, 5000)