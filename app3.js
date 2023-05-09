// local reviews data
const reviews = [
  {
    id: 1,
    name: "Suprim Sharma",
    job: "Free walker",
    img: "static/suprim.JPG",
    text: "Life is not fundamentally a ready made  thing It's an empty canvas where u add all the colours and meaning. There is nothing to do and nowhere to go. U add things up and start the chase and get along on that race",
  },
  {
    id: 2,
    name: "PKC",
    job: "Osho Pena",
    img: "static/pkc.JPG",
    text: "I AM NOT DESTINED TO BE THE GREATEST OF ALL TIME. BUT I KNOW I CAN BE IT WITH HARD WORK. ESPECIALLY THIS,I AM NOT DESTINED OR ALLOWED BY THE UNIVERSE TO BE THE KING OF THE WORLD. BUT I CAN BE IT !!!",
  },
  {
    id: 4,
    name: "Divyaswor",
    job: "Software developer",
    img: "static/dips.JPG",
    text: "“If you are smart enough, you will find what to do”.",
  },
  {
    id: 3,
    name: "Popsicle",
    job: "Singing Yogic",
    img: "static/popp.jpg",
    text: "I'mma be a Goddess.",
  },

  {
    id: 5,
    name: "Aastha Pandey",
    job: "Tracy McConnell doppleganger",
    img: "static/pande.JPG",
    text: "I want a gay child",
  },
  {
    id: 6,
    name: "Ashish Khatako",
    job: "Manga ASMRist  ",
    img: "static/khata.JPG",
    text: "Aba, aaja dekhi herxu Django ma.",
  },
  {
    id: 7,
    name: "Skein Neupane",
    job: "Engineering Analyst  ",
    img: "static/ske.JPG",
    text: "Poch and PSG are serial bottlers",
  },
  {
    id: 8,
    name: "Nagatoro",
    job: "Senpai Teaser",
    img: "static/person-1.jpeg",
    text: "Senpai, I will model for you.",
  },
  {
    id:9,
    name: "Rajay Bajracharya",
    job: "Graphic designer",
    img: "static/baj.JPG",
    text: "Oof, 2 ghanta basketball khelera ta ekdum fresh vaye. Aba, freelance continue garnu paryo. Oof",
  },
  {
    id: 10,
    name: "Abinash Acharya",
    job: "Best adviser",
    img: "static/abi.JPG",
    text: "La k la, tmi ekdum hansy chau k bro,tmro stamina dekhera kti haru rolan.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = url(item.img);
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
