/////////////// TIMER ANIMATION

const bosm = new Date("October 14, 2022 23:59:59").getTime();
let prev_day, prev_hr, prev_min, prev_sec;
let days, hrs, min, sec;
let temp = 0;

// setInterval(() => {
//   document.getElementById("sec").style.animation =
//     temp % 2 == 0 ? "card-flip 0.6s" : "none";
//   temp++;
// }, 500);

setInterval(() => {
  const current_time = new Date().getTime();

  // updating number of days left
  days = Math.floor((bosm - current_time) / (1000 * 60 * 60 * 24));
  days = days < 10 ? `0${days}` : days;

  // updating number of hours left (in that day)
  hrs = Math.floor((bosm - current_time) / (1000 * 60 * 60)) - days * 24;
  hrs = hrs < 10 ? `0${hrs}` : hrs;

  // updating number of minutes left (in that hour)
  min =
    Math.floor((bosm - current_time) / (1000 * 60)) - days * 24 * 60 - hrs * 60;
  min = min < 10 ? `0${min}` : min;

  // // updating number of seconds left (in that min)
  // sec =
  //   Math.floor((bosm - current_time) / 1000) -
  //   days * 24 * 60 * 60 -
  //   hrs * 60 * 60 -
  //   min * 60;
  // sec = sec < 10 ? `0${sec}` : sec;

  // when timer is completed (BOSM arrives)
  if (days < 0) {
    days = "00";
    hrs = "00";
    min = "00";
    // sec = "00";
  }

  // adding animation to timer cards
  document.getElementById("days").style.animation =
    prev_day != days ? "card-flip 0.6s" : "none";
  document.getElementById("hours").style.animation =
    prev_hr != hrs ? "card-flip 0.6s" : "none";
  document.getElementById("min").style.animation =
    prev_min != min ? "card-flip 0.6s" : "none";

  // updating the temporary variables
  prev_day = days;
  prev_hr = hrs;
  prev_min = min;
  // prev_sec = sec;

  // updating the divs
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hrs;
  document.getElementById("min").innerText = min;
  // document.getElementById("sec").innerText = sec;
}, 1000);

////////// RANDOM STARS

// let stars = "";
// const sc_factor = Math.random() * 0.1 + 0.25;
// let height = window.innerHeight;
// let width = window.innerWidth;
// let star_count = (height * width * sc_factor) / 1000;

// const add_stars = () => {
//   stars = "";
//   for (let i = 0; i < star_count; i++) {
//     let class_int = Math.random();
//     let offset_x = Math.random() * 1;
//     let offset_y = Math.random() * 1;

//     if (class_int < 0.5) {
//       stars = `${stars}\n
//       <div class="star-type1 star" style="left: ${offset_x * width}px; top: ${
//         offset_y * height
//       }px"></div>`;
//     } else {
//       stars = `${stars}\n
//       <div class="star-type2 star" style="left: ${offset_x * width}px; top: ${
//         offset_y * height
//       }px"></div>`;
//     }
//   }
//   stars_cont.innerHTML = stars;
// };

// add_stars();

////////// AUDIO FILES

let sound = new Audio("Assets/switchsound.mp3");

function flicker() {
  sound.volume = 0.3;
  sound.playbackRate = 1.3;
  sound.play();
}

////////// LINES Transform

// const lines = document.getElementsByClassName('lines')
// let scroll = window.pageYOffset;
// let rate = (scroll * 0.5) - 750;
// lines[0].style.transform = 'translate3d(0px,' + rate + 'px,0px)';
// document.addEventListener('scroll', () => {
//   lines[0].style.transform = 'translate3d(0px,' + rate + 'px,0px)';
// })

////////// LOADER EVENTS

let body = document.querySelector("body");

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const light = document.getElementsByClassName("light");

  if (document.getElementById("video").readyState === 4) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const hide = document.querySelector(".hide");
    hide.style.animation = "appear 3s";

    setTimeout(() => {
      hide.style.opacity = 0.9;
    }, 2901);
  }

  loader.addEventListener("click", () => {
    const fred = document.getElementsByClassName("fall-red");
    const fblue = document.getElementsByClassName("fall-blue");
    const fyellow = document.getElementsByClassName("fall-yellow");
    const loop1 = [fred, fblue, fyellow];

    const bred = document.querySelector(".bg-red");
    const bblue = document.querySelector(".bg-blue");
    const byellow = document.querySelector(".bg-yellow");
    let loop2 = [bred, bblue, byellow];

    const appear = [
      document.querySelector("#bosm"),
      document.querySelector("#bosmr"),
    ];

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    loader.style.animation = "fade-out 1s ease-out";
    body.style.overflowY = "scroll";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);

    setTimeout(() => {
      flicker();
    }, 1000);

    light[0].style.animation = "flicker 2s 1s";
    light[1].style.animation = "flicker 2s 2.3s";
    light[2].style.animation = "flicker 2s 1.5s";

    bred.style.animation = "flicker 2s 1s";
    bblue.style.animation = "flicker 2s 2.3s";
    byellow.style.animation = "flicker 2s 1.5s";

    for (let i = 0; i < 3; i++) loop2[i].style.opacity = 0;
    for (let i = 0; i < 2; i++) appear[i].style.opacity = 0;

    for (let i = 0; i < 3; i++) {
      light[i].style.opacity = 0;
      fred[i].style.animation = "fall-red 52s linear 2.4s infinite";
      fblue[i].style.animation = "fall-blue 52s linear 2.4s infinite";
      fyellow[i].style.animation = "fall-yellow 52s linear 2.4s infinite";
    }

    setTimeout(() => {
      for (let i = 0; i < 3; i++) loop1[i][0].style.opacity = 1;
    }, 3000);

    setTimeout(() => {
      for (let i = 0; i < 3; i++) loop1[i][1].style.opacity = 1;
    }, 3500);

    setTimeout(() => {
      for (let i = 0; i < 3; i++) loop1[i][2].style.opacity = 1;
    }, 3300);

    setTimeout(() => {
      document.getElementById("lightRed").style.opacity = 1;
      bred.style.opacity = 1;
    }, 3000);

    setTimeout(() => {
      document.getElementById("lightBlue").style.opacity = 1;
      bblue.style.opacity = 1;
    }, 3500);

    setTimeout(() => {
      document.getElementById("lightYellow").style.opacity = 1;
      byellow.style.opacity = 1;
    }, 3300);

    setTimeout(() => {
      for (let i = 0; i < 2; i++) appear[i].style.animation = "fade-in 1.7s";
    }, 3000);

    setTimeout(() => {
      for (let i = 0; i < 2; i++) appear[i].style.opacity = 1;
    }, 4700);

    if (screen.width < 801) {
      for (let i = 0; i < 3; i++) {
        fred[i].style.animation = "fall-red-2 52s linear 2.4s infinite";
        fblue[i].style.animation = "fall-blue-2 52s linear 2.4s infinite";
        fyellow[i].style.animation = "fall-yellow-2 52s linear 2.4s infinite";
      }

      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          loop1[i][j].setAttribute("src", "Assets/smol.png");
    } else {
      for (let i = 0; i < 3; i++) {
        fred[i].setAttribute("src", "Assets/fall-red-big.png");
        fblue[i].setAttribute("src", "Assets/fall-blue-big.png");
        fyellow[i].setAttribute("src", "Assets/fall-yellow-big.png");
      }
    }
  });
});

////////// CONTACT POP-UP

const texts = document.querySelectorAll(".number");
const mails = document.querySelectorAll(".mail");
const copied = document.getElementById("copied");
const textarea = document.createElement("textarea");

texts.forEach((text) => {
  text.addEventListener("click", () => {
    copyText(text);
  });
});

mails.forEach((text) => {
  text.addEventListener("click", () => {
    copyText(text);
  });
});

function copyText(text) {
  console.log(text);

  // copied.style.transform = `translateY(${})`
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.opacity = 0;
  textarea.style.pointerEvents = "none";
  textarea.value = text.innerText;

  document.body.appendChild(textarea);
  navigator.clipboard.writeText(textarea.value);
  textarea.select();

  setTimeout(() => {
    copied.style.opacity = 0;
  }, 1000);
}

////////// HAMBURGER EVENTS

let open = false;
const right = document.querySelector(".right");

const hamImg = document.querySelector(".ham-img span");
const hamText = document.querySelector(".ham-text span");
const hamLogoImg = document.querySelector(".ham-logo img");

const hamGrid = document.querySelector(".ham-grid");
const hamLogo = document.querySelector(".ham-logo");
const hamIcons = document.querySelector(".ham-icons");
const hamLinks = document.querySelector(".ham-links");

const hamIcon = document.querySelectorAll(".ham-icon");
const hamLine = document.querySelectorAll(".hamburger span");
const hamLink = document.querySelectorAll(".ham-links div a");

document.querySelector(".hamburger").addEventListener("click", () => {
  if (!open) {
    // hamburger menu opens
    open = true;
    hamGrid.style.display = "grid";
    body.style.overflowY = "hidden";

    // links disappear
    for (let i = 1; i <= 4; i++) hamLink[i - 1].style.opacity = 0;

    // right nav position
    right.style.position = "fixed";
    right.style.top = "0rem";
    right.style.right = "0";

    // opening animations
    hamImg.style.animation = "span-right 0.45s linear";
    hamText.style.animation = "span-left 0.45s linear";
    hamLogo.style.animation = "come-up 0.45s linear";
    hamIcons.style.animation = "come-down 0.45s linear";
    hamLinks.style.animation = "come-up 0.45s linear";

    // links appear
    for (let i = 1; i <= 4; i++) {
      hamLink[i - 1].style.animation = `link-up 0.2s linear 0.45s`;
      setTimeout(() => {
        hamLink[i - 1].style.opacity = 1;
      }, 605);
    }

    // icons appear
    hamIcon[0].style.animation = `link-up 0.2s linear 0.45s`;
    hamIcon[1].style.animation = `link-up 0.2s linear 0.45s`;
    hamLogoImg.style.animation = `link-up 0.2s linear 0.45s`;

    setTimeout(() => {
      hamIcon[0].style.opacity = 1;
      hamIcon[1].style.opacity = 1;
      hamLogoImg.style.opacity = 1;
    }, 500);

    // hamburger animations
    hamLine[0].style.animation = "ham-up-1 0.15s linear";
    hamLine[1].style.opacity = 0;
    hamLine[2].style.animation = "ham-down-1 0.15s linear";

    setTimeout(() => {
      hamLine[2].style.width = "25px";
      hamLine[2].style.top = "13.2px";
      hamLine[2].style.transform = "rotate(-405deg)";

      hamLine[0].style.width = "25px";
      hamLine[0].style.top = "13.2px";
      hamLine[0].style.transform = "rotate(405deg)";
    }, 150);
  } else {
    // hamburger menu closes
    open = false;
    setTimeout(() => {
      hamGrid.style.display = "none";
      body.style.overflowY = "scroll";
    }, 500);

    // right nav position
    right.style.position = "relative";
    right.style.top = "0";
    right.style.right = "0";

    // closing animations
    hamImg.style.animation = "span-go-right 0.5s linear";
    hamText.style.animation = "span-go-left 0.5s linear";
    hamLogo.style.animation = "go-down 0.5s linear";
    hamIcons.style.animation = "go-up 0.5s linear";
    hamLinks.style.animation = "go-down 0.5s linear";

    // links disappear
    for (let i = 1; i <= 4; i++) hamLink[i - 1].style.opacity = 0;

    // icons disappear
    hamIcon[0].style.opacity = 0;
    hamIcon[1].style.opacity = 0;
    hamLogoImg.style.opacity = 0;

    // hamburger animations
    hamLine[0].style.animation = "ham-up-2 0.15s linear";
    hamLine[1].style.opacity = 1;
    hamLine[2].style.animation = "ham-down-2 0.15s linear";

    setTimeout(() => {
      hamLine[2].style.width = "13px";
      hamLine[2].style.top = "25.4px";
      hamLine[2].style.transform = "none";

      hamLine[0].style.width = "35px";
      hamLine[0].style.top = "1px";
      hamLine[0].style.transform = "none";
    }, 150);
  }
});

////////// SIDEBAR NAVIGATION

const sideScroll = document.getElementById("sideScroll");
scrollElems = Array.from(document.getElementsByClassName("navBut"));

sideScroll.addEventListener("click", (e) => {
  scrollElems.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
  e.target.classList.add("active");
});

const headers = Array.from(document.getElementsByClassName("sec-head"));
let rate = 0.09;
document.addEventListener("scroll", (e) => {
  let windowHeight = window.innerHeight;
  let y = window.pageYOffset;
  let scrolled = -y * rate + "px";
  sideScroll.style.setProperty("--sideScroll", scrolled);
  headers.forEach((e) => {
    let revealTop = e.getBoundingClientRect().top;
    let revealPoint = 160;
    let index = headers.indexOf(e);
    if (revealTop < windowHeight - revealPoint) {
      scrollElems.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
      });
      scrollElems[3 - index].classList.add("active");
    }
  });
});
let offsets = [];
headers.forEach((e) => {
  offsets.push(e.offsetTop);
});
console.log(offsets);
// console.log(offsets);
let offset = 0;
setInterval(() => {
  offset = window.pageYOffset;
}, 50);

// document.addEventListener("scroll", (e) => {
//   let y = window.pageYOffset
//   console.log(y);
//     if(y>offset){
//       setTimeout(() => {
//         if (y > 200 && y < 700) {
//           window.scrollTo(0, offsets[1])
//         }
//         else if (y > 900 && y < 1600) {
//           window.scrollTo(0, offsets[2])
//         }
//         else if (y > 1800 && y < 2297) {
//           window.scrollTo(0, offsets[3]+300)
//         }
//       }, 600);
//     }
//     else{
//       setTimeout(() => {
//         if (y > 200 && y < 700) {
//           window.scrollTo(0, 0)
//         }
//         else if (y > 900 && y < 1600) {
//           window.scrollTo(0, offsets[1])
//         }
//         else if (y > 1800 && y < 2297) {
//           window.scrollTo(0, offsets[2])
//         }
//       }, 600);
//     }

// })
// [176, 872, 1740, 2321]
// 176
// 1: 848
// 2: 1716
// 3: 2297
