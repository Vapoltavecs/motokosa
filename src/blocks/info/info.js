const info = document.querySelector(".info")
const infoContent = info.querySelector(".info__content")
const infoHeader = infoContent.querySelector(".info__content-header")
const openContent = info.querySelector(".info__button")

let isOpen = false

const closeInfo = () => {
    const heightContent = infoHeader.clientHeight + "px"
    infoContent.style.height = heightContent
    openContent.innerHTML = "Більше..."
    isOpen = false
}
window.addEventListener("DOMContentLoaded", () => {
    const heightAllContent = infoContent.clientHeight + "px"
    closeInfo()
    openContent.addEventListener("click", () => {
        if(isOpen){
            closeInfo()
        } else{
            isOpen = true
            openContent.innerHTML = "Згорнути"
            infoContent.style.height = heightAllContent
        }
    })
})
