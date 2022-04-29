/**********************************/
/*** navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    hamburger.nextElementSibling.classList.toggle("mobile-hidden")
})

/**********************************/
/*** infinity scroll **************/
/**********************************/
const scrollBanner = document.getElementById("scroll-banner")

scrollBanner.addEventListener("mouseenter", () => {
    scrollBanner.style.animationPlayState = "paused"
})

scrollBanner.addEventListener("mouseleave", () => {
    scrollBanner.style.animationPlayState = "running"
})

/**********************************/
/*** carousel *********************/
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