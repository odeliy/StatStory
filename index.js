/**********************************/
/*** Navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    hamburger.nextElementSibling.classList.toggle("mobile-hidden")
})

/**********************************/
/*** Case Studies Carousel ********/
/**********************************/
document.getElementById("prev").addEventListener("click", () => {
    moveToPrevCaseStudy(caseStudies)
})
document.getElementById("next").addEventListener("click", () => {
    moveToNextCaseStudy(caseStudies)
})

const caseStudies = document.getElementsByClassName("cstud__item")
const caseStudiesTotal = caseStudies.length
let caseStudiesPosition = 0

function hideAllSlides(slides) {
    for (let slide of slides) {
        slide.classList.remove("visible")
    }
}

function moveToNextCaseStudy(slides) {
    hideAllSlides(slides)

    if (caseStudiesPosition === caseStudiesTotal - 1) {
        caseStudiesPosition = 0
    } else {
        caseStudiesPosition++
    }

    caseStudies[caseStudiesPosition].classList.add("visible")
}

function moveToPrevCaseStudy(slides) {
    hideAllSlides(slides)

    if (caseStudiesPosition === 0) {
        caseStudiesPosition = caseStudiesTotal - 1
    } else {
        caseStudiesPosition--
    }

    caseStudies[caseStudiesPosition].classList.add("visible")
}

/**********************************/
/*** Testimonials Carousel ********/
/**********************************/
const testimonialsLeftArrow = document.getElementById("testimonials-left-arrow")
const testimonialsRightArrow = document.getElementById("testimonials-right-arrow")

testimonialsLeftArrow.addEventListener("click", () => {
    nextTestimonial()
})

testimonialsRightArrow.addEventListener("click", () => {
    previousTestimonial()
})