let movies = [
  {
    name: "wanda vision",
    des:
      "Three weeks after the events of Avengers: Endgame (2019),[1] Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.",
    image: "images/slider 7.png"
  },
  {
    name: "loki",
    des:
      "After stealing the Tesseract during the events of Avengers: Endgame (2019), an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a time variant, or help fix the timeline and stop a greater threat. Loki ends up trapped in his own crime thriller, traveling through time.",
    image: "images/slider 9.png"
  },
  {
    name: "falcon and the winter soldier",
    des:
      "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019),Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",

    image: "images/slider 6.jpg"
  },
  {
    name: "Avatar 2",
    des:
      "Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    image: "images/avatar.jpg"
  },

  {
    name: "The Nun",
    des:
      "In 1952 Romania, two nuns living at the Saint Cartha's monastery are attacked by an unseen evil force after one of them entered a tunnel to retrieve an ancient Christian relic. The surviving nun, Sister Victoria, flees from the attacker, a demon appearing as a nun, and hangs herself. Her body is discovered by Frenchie, a villager who transports supplies to the nuns.",
    image: "images/Untitled design (1).png"
  },
  {
    name: "Bhramhastra",
    des:
      "In ancient India, a group of sages in the Himalayas collide with the energy Brahm-shakti, which produces many celestial weapons of great power called astras. The strongest among them, the Brahmāstra, has the capacity to destroy the world. The sages use their respective astras to tame the unstable Brahmāstra and become the Brahmānsh, a secret society to protect the world from the powers of astras.",
    image: "images/slider 5.jpg"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // adding sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards
const videoCards = document.querySelectorAll(".video-card");
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
