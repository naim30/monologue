let stateMovies = {
  showTrailer: false,
};

let watchTrailer = document.querySelector(".watch-trailer");
let movieContent = document.querySelector(".movie-content");
let closeMenuButton = document.querySelector(".close-button");
let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");

setTimeout(() => {
  movieContent.classList.add("hideMovieDetails");
}, 1500);

function showTrailer() {
  if (!stateMovies.showTrailer) {
    movieContent.classList.remove("hideMovieDetails");
    movieContent.classList.add("showMovieDetails");
    stateMovies.showTrailer = true;
  } else {
    movieContent.classList.remove("showMovieDetails");
    movieContent.classList.add("hideMovieDetails");
    stateMovies.showTrailer = false;
  }
}

function openMenu() {
  console.log("openMenu");
  menu.classList.remove("hideMenu");
  menu.classList.add("showMenu");
}

function closeMenu() {
  console.log("closeMenu");
  menu.classList.remove("showMenu");
  menu.classList.add("hideMenu");
}

watchTrailer.addEventListener("click", showTrailer);
closeMenuButton.addEventListener("click", closeMenu);
menuButton.addEventListener("click", openMenu);

stateReviews = {
  modalOpen: false,
  review: {
    name: "",
    value: "",
  },
};

let openReviewButton = document.querySelector(".add-review");
let reviewModal = document.querySelector(".add-review-form");
let closeReviewButton = document.querySelector("#close-review");
let inputName = document.querySelector("#name");
let inputReview = document.querySelector("#review");
let addReview = document.querySelector("#add-review");
let like1 = document.querySelector("#like1");
let like2 = document.querySelector("#like2");
let like3 = document.querySelector("#like3");

function openModal() {
  reviewModal.classList.remove("hideModal");
  reviewModal.classList.add("showModal");
}

function closeModal() {
  reviewModal.classList.remove("showModal");
  reviewModal.classList.add("hideModal");
}

function validateName(event) {
  let name = event.target.value;
  inputName.style.borderColor = "black";
  if (name.length > 0) {
    name = name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
  stateReviews.review.name = name;
  event.target.value = name;
}

function validateReview(event) {
  let review = event.target.value;
  stateReviews.review.value = review;
  inputReview.style.borderColor = "black";
}

function validateReviewForm() {
  console.log(stateReviews.review.name, stateReviews.review.value.length);
  if (
    stateReviews.review.name.length > 0 &&
    stateReviews.review.value.length > 0
  ) {
    inputName.value = "";
    inputReview.value = "";
    stateReviews.review.name = "";
    stateReviews.review.value = "";
    closeModal();
  } else {
    if (stateReviews.review.name.length === 0) {
      inputName.style.borderColor = "red";
    }
    if (stateReviews.review.value.length === 0) {
      inputReview.style.borderColor = "red";
    }
  }
}

function toggleLike(like) {
  if (like.innerHTML === "favorite_border") {
    console.log("favorite_border");
    like.innerHTML = "favorite";
  } else {
    console.log("favorite");
    like.innerHTML = "favorite_border";
  }
}

openReviewButton.addEventListener("click", openModal);
closeReviewButton.addEventListener("click", closeModal);
inputName.addEventListener("input", validateName);
inputReview.addEventListener("input", validateReview);
addReview.addEventListener("click", validateReviewForm);
like1.addEventListener("click", () => toggleLike(like1));
like2.addEventListener("click", () => toggleLike(like2));
like3.addEventListener("click", () => toggleLike(like3));
