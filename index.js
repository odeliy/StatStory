/**********************************/
/*** Navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    hamburger.nextElementSibling.classList.toggle("mobile-hidden")
})


/**********************************/
/*** Horizontal scroll Center *****/
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
const slides = document.getElementsByClassName("cstud__item")
const totalSlides = slides.length
let slidePosition = 0

document.getElementById("prev").addEventListener("click", () => {
    moveToPrevSlide()
})
document.getElementById("next").addEventListener("click", () => {
    moveToNextSlide()
})

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("visible")
    }
}

function moveToNextSlide() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("visible")
}

function moveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add("visible")
}