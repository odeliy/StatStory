/**********************************/
/*** navigation *******************/
/**********************************/
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.nextElementSibling.classList.toggle("mobile-hidden");
});

/**********************************/
/*** infinity scroll **************/
/**********************************/
const scrollBanner = document.getElementById("scroll-banner");

scrollBanner.addEventListener("mouseenter", () => {
  scrollBanner.style.animationPlayState = "paused";
});

scrollBanner.addEventListener("mouseleave", () => {
  scrollBanner.style.animationPlayState = "running";
});

/**********************************/
/*** Fade In Bullets **************/
/**********************************/
function addClass(entries) {
  entries.forEach((entry) => {
    /* gaurd against initial page load */
    if (entry.isIntersecting === true) {
      entry.target.classList.add("fadeIn");
    }
  });
}

/* bullet points first set */
const whyObserver = new IntersectionObserver(addClass, { threshold: [1] });
whyObserver.observe(document.querySelector("#w1_1"));
whyObserver.observe(document.querySelector("#w1_2"));
whyObserver.observe(document.querySelector("#w1_3"));
whyObserver.observe(document.querySelector("#w1_4"));
whyObserver.observe(document.querySelector("#w1_5"));

/* bullet points second set */
const why2Observer = new IntersectionObserver(addClass, { threshold: [0.5] });
why2Observer.observe(document.querySelector("#w2_1"));
why2Observer.observe(document.querySelector("#w2_2"));
why2Observer.observe(document.querySelector("#w2_3"));
why2Observer.observe(document.querySelector("#w2_4"));

/* struggle */
const struggleObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
struggleObserver.observe(document.querySelector("#struggleObserver"));

/* experts */
const expertsObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
expertsObserver.observe(document.querySelector("#expertsObserver"));

/* why youtube ads? */
const whyTitleObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
whyTitleObserver.observe(document.querySelector("#whyTitleObserver"));

const whyBtnObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
whyBtnObserver.observe(document.querySelector("#whyBtnObserver"));

/* who is? */
const whoObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
whoObserver.observe(document.querySelector("#whoObserver"));

/* maximize exposure */
const maximizeObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
maximizeObserver.observe(document.querySelector("#maximizeObserver"));

/* measure success */
const measureObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
measureObserver.observe(document.querySelector("#measureObserver"));

/* why work with? */
const why2TitleObserver = new IntersectionObserver(addClass, {
  threshold: [0.25],
});
why2TitleObserver.observe(document.querySelector("#why2TitleObserver"));

/**********************************/
/*** Lazy Load Background Imgs ****/
/**********************************/
const backgroundImgObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    entries[0].target.style.backgroundImage =
      "url(./resources/images/laptop.png)";
  }
});
backgroundImgObserver.observe(document.querySelector(".experts__outer"));

const backgroundImg2Observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    entries[0].target.style.backgroundImage =
      "url(./resources/images/work.png)";
  }
});
backgroundImg2Observer.observe(document.querySelector(".success__ghost"));

/**********************************/
/*** case studies carousel ********/
/**********************************/
let position = 0;
const slides = [
  {
    id: 1,
    href: "./case-studies/case-studies.html",
    person: "Penny Kervill",
    occupation: "Realtor",
    subsUp: "304%",
    viewsUp: "451%",
    leadsUp: "3X",
  },

  {
    id: 2,
    href: "./case-studies/case-studies.html",
    person: "Jane Smith",
    occupation: "Occupation",
    subsUp: "300%",
    viewsUp: "260%",
    leadsUp: "2X",
  },

  {
    id: 3,
    href: "./case-studies/case-studies.html",
    person: "Joe Smith",
    occupation: "Spa Repair",
    subsUp: "980%",
    viewsUp: "40%",
    leadsUp: "9X",
  },

  /* 
    adding new case studies to the carousel is easy.
    simply add new objects like the format below.
    replace <> tags with appopriate data.
  */

  /*****************************************************
      {
        id: <Unique Number>,
        href: "./case-studies/<new-case-study.html>",
        person: "<Full Name>",
        occupation: "<Job Title>",
        subsUp: "<New Percentage>",
        viewsUp: "<New Percentage>",
        leadsUp: "<New X Increase>",
      },
  *******************************************************/
];
const numOfSlides = slides.length;
const carousel = document.getElementById("carousel");

function renderHtml() {
  carousel.innerHTML = `
    <a
      class="cstud__item"
      href=${slides[position].href}
    >
      <span class="cstud__person">${slides[position].person} | ${slides[position].occupation}</span>
      <span class="cstud__subscribers">${slides[position].subsUp}</span>
      <span class="cstud__views">${slides[position].viewsUp}</span>
      <span class="cstud__leads">${slides[position].leadsUp}</span>
    </a>
`;
}

renderHtml();

const prevArrow = document.getElementById("case-studies-prev");
prevArrow.addEventListener("click", () => {
  if (position === 0) {
    position = numOfSlides - 1;
  } else {
    position--;
  }

  renderHtml();
});

const nextArrow = document.getElementById("case-studies-next");
nextArrow.addEventListener("click", () => {
  if (position === numOfSlides - 1) {
    position = 0;
  } else {
    position++;
  }

  renderHtml();
});
