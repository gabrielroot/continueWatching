window.onload = ()=>{
	const container = document.querySelector(".ytd-video-primary-info-renderer")
	const h1 = document.querySelector("#container > h1")
	
	let p = document.createElement("p")
	p.style.color = "green"
	p.style.fontWeight = 700
	p.style.fontSize = "20px"
	
	container.insertBefore(p, h1)
}

console.log("Monitoramento iniciado...")
let COUNT = 0
const SIM_BUTTON = document.querySelector(".style-scope .yt-button-renderer .style-blue-text .size-default")
const PLAY_BUTTON = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button")
	
setInterval(()=>{
	const OVERLAY = document.querySelector("body > tp-yt-iron-overlay-backdrop")
	if(OVERLAY){
		OVERLAY.click()

		COUNT++
		p.innerText = `[ME DEVE ${COUNT}]`
		console.log("SIM, Continuar assistindo!!!",COUNT," Counts")
	}
}, 5000)