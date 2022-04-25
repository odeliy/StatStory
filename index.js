/**********************************/
/*** Navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    hamburger.nextElementSibling.classList.toggle("mobile-hidden")
})

/**********************************/
/*** Carousels ********************/
/**********************************/
let caseStudiesPosition = 0
let testimonialsPosition = 0

let x = 0
let count = 0

const caseStudies = document.getElementsByClassName("cstud__item")
const testimonialsImg = document.getElementsByClassName ("testimonials__img")
const testimonialsDesc = document.getElementsByClassName ("testimonials__desc")
const testimonialsPerson = document.getElementsByClassName ("testimonials__person")

const caseStudiesTotal = caseStudies.length
const testimonialsTotal = testimonialsImg.length

function hideContent(content) {
    for (let item of content) {
        item.classList.remove("visible")
    }
}

document.getElementById("testimonials-left-arrow").addEventListener("click", () => {
    hideContent(testimonialsImg)
    hideContent(testimonialsDesc)
    hideContent(testimonialsPerson)

    if(testimonialsPosition === 0) {
        testimonialsPosition = testimonialsTotal - 1
    } else {
        testimonialsPosition--
    }

    testimonialsImg[testimonialsPosition].classList.add("visible")
    testimonialsDesc[testimonialsPosition].classList.add("visible")
    testimonialsPerson[testimonialsPosition].classList.add("visible")
})

document.getElementById("testimonials-right-arrow").addEventListener("click", () => {
    hideContent(testimonialsImg)
    hideContent(testimonialsDesc)
    hideContent(testimonialsPerson)

    if(testimonialsPosition === testimonialsTotal - 1) {
        testimonialsPosition =  0
    } else {
        testimonialsPosition++
    }

    testimonialsImg[testimonialsPosition].classList.add("visible")
    testimonialsDesc[testimonialsPosition].classList.add("visible")
    testimonialsPerson[testimonialsPosition].classList.add("visible")
})
document.getElementById("case-studies-prev").addEventListener("click", () => {
    prevCaseStudies()
})

document.getElementById("case-studies-next").addEventListener("click", () => {
    nextCaseStudies()
})

function prevCaseStudies() {
    hideContent(caseStudies)

    if(caseStudiesPosition === 0) {
        caseStudiesPosition = caseStudiesTotal - 1
    } else {
        caseStudiesPosition--
    }

    caseStudies[caseStudiesPosition].classList.add("visible")
}

function nextCaseStudies() {
    hideContent(caseStudies)

    if(caseStudiesPosition ===  caseStudiesTotal - 1) {
        caseStudiesPosition = 0
    } else {
        caseStudiesPosition++
    }

    caseStudies[caseStudiesPosition].classList.add("visible")
}

// let interval = setInterval(nextCaseStudies, 5000)