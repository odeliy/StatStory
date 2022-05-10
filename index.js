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

const whyObserver = new IntersectionObserver(addClass, { threshold: [1] });
whyObserver.observe(document.querySelector("#w1_1"));
whyObserver.observe(document.querySelector("#w1_2"));
whyObserver.observe(document.querySelector("#w1_3"));
whyObserver.observe(document.querySelector("#w1_4"));
whyObserver.observe(document.querySelector("#w1_5"));

const why2Observer = new IntersectionObserver(addClass, { threshold: [0.5] });
why2Observer.observe(document.querySelector("#w2_1"));
why2Observer.observe(document.querySelector("#w2_2"));
why2Observer.observe(document.querySelector("#w2_3"));
why2Observer.observe(document.querySelector("#w2_4"));

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
/*** carousel *********************/
/**********************************/
// let position = 0;
// const slides = document.getElementsByClassName("cstud__item");
// const numOfSlides = slides.length;

// function hideContent(content) {
//   for (let item of content) {
//     item.classList.remove("visible");
//   }
// }

// document.getElementById("case-studies-prev").addEventListener("click", () => {
//   hideContent(slides);

//   if (position === 0) {
//     position = numOfSlides - 1;
//   } else {
//     position--;
//   }

//   slides[position].classList.add("visible");
// });

// document.getElementById("case-studies-next").addEventListener("click", () => {
//   hideContent(slides);

//   if (position === numOfSlides - 1) {
//     position = 0;
//   } else {
//     position++;
//   }

//   slides[position].classList.add("visible");
// });
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
