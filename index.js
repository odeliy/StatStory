/**********************************/
/*** Navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    hamburger.nextElementSibling.classList.toggle("mobile-hidden")
})

/**********************************/
/*** Center Scroll ****************/
/**********************************/
/* 1. center horizontal scroll section */
document.getElementById("scrollCenter").scrollIntoView({
    inline: "center"
})

/* 2. reset browser to top of page */
document.getElementById("header").scrollIntoView({
    block: "start"
})

/**********************************/
/*** Carousel *********************/
/**********************************/
let position = 0
const slides = document.getElementsByClassName("cstud__item")
const numOfSlides = slides.length


function hideContent(content) {
    for (let item of content) {
        item.classList.remove("visible")
    }
}

/* Previous Arrow */
document.getElementById("case-studies-prev").addEventListener("click", () => {
    hideContent(slides)

    if(position === 0) {
        position = numOfSlides - 1
    } else {
        position--
    }

    slides[position].classList.add("visible")
})

/* Next Arrow */
document.getElementById("case-studies-next").addEventListener("click", () => {
    hideContent(slides)

    if(position === numOfSlides - 1) {
        position = 0
    } else {
        position++
    }

    slides[position].classList.add("visible")
})

/**********************************/
/*** Trusted By Animation *********/
/**********************************/
const icon = document.getElementById("main-icon")
const iconArray = [
    "./resources/images/pat-lotz.png",
    "./resources/images/fishing-podcast.png",
    "./resources/images/fishing-podcast.png"
]
let iconArrayPos = 0

setInterval(changeIcon, 3000)

function changeIcon() {
    if(window.screen.width <= 650) {
        iconArrayPos++

        if(iconArrayPos === iconArray.length) {
            iconArrayPos = 0
        }
    
        /* remove animation class, so it can be retriggered */
        icon.classList.remove("animate")
        /* reflow dom element */
        icon.offsetWidth
        /* add animation class again */
        icon.classList.add("animate")
    
        icon.src = iconArray[iconArrayPos]
    }

    /* if screen is resized, set to default at next interval */
    if(window.screen.width >= 651) {
        iconArrayPos = 0
        icon.src = iconArray[iconArrayPos]
    }
}