let stateMovies = {
  showTrailer: false,
  movies: [
    {
      creator: "Bobby Rubio",
      title: "Float",
      about:
        "It is the fourth film in Pixar's SparkShorts program, and focuses on a son's ability to fly and the choice his father must make.",
      trailer: "JG7Xgy1akzI",
      url: "./moviepage/movie1/index.html",
    },
    {
      creator: "Julian Schnabel",
      title: "At Eternity's Gate",
      about:
        "the story of Vincent van Gogh's (Willem Dafoe) stay in Auvers-sur-Oise, France, leading up to his tragic death",
      trailer: "T77PDm3e1iE",
      url: "./moviepage/movie1/index.html",
    },
    {
      creator: "Lee Chang-dong",
      title: "Burning",
      about:
        'The film is based on the short stories "Barn Burning" from The Elephant Vanishes by Haruki Murakami and "Barn Burning" by William Faulkner',
      trailer: "wi6Kw7V8gXk",
      url: "./moviepage/movie1/index.html",
    },
    {
      creator: "Jeffrey Lieber",
      title: "Impulse",
      about:
        "Impulse is an American science fiction drama streaming television series based on the 2013 Steven Gould novel Impulse. ",
      trailer: "OdKCzhU7kQI",
      url: "./moviepage/movie1/index.html",
    },
    {
      creator: "Elvira Lind",
      title: "The Letter Room",
      about:
        "When a kind-hearted prison officer is transferred to the letter room, he soon gets involved in an inmate's personal affairs.",
      trailer: "06qYirv9jzI",
      url: "./moviepage/movie1/index.html",
    },
  ],
  movieCounter: 0,
};

let watchTrailer = document.querySelector(".watch-trailer");
let movieContent = document.querySelector(".movie-content");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let movieTrailer = document.querySelector(".movie-trailer");
let movieCreator = document.querySelector(".movie-creator");
let movieName = document.querySelector(".movie-name");
let movieAbout = document.querySelector(".movie-about");
let seeMoreButton = document.querySelector(".see-more");
let closeMenuButton = document.querySelector(".close-button");
let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");
let seeMoreLink = document.querySelector("#see-more");

stateMovies.movieCounter = Math.floor(
  Math.random() * stateMovies.movies.length
);

setMovie(stateMovies.movieCounter);

function setMovie(num) {
  movieTrailer.src = `https://www.youtube.com/embed/${stateMovies.movies[num].trailer}?autoplay=1&mute=1&controls=0&playlist=${stateMovies.movies[num].trailer}&loop=1`;

  movieCreator.classList.remove("hideMovieInfo");
  movieCreator.childNodes[3].innerHTML = stateMovies.movies[num].creator;
  movieCreator.classList.add("showMovieInfo");

  movieName.classList.remove("hideMovieInfo");
  movieName.innerHTML = stateMovies.movies[num].title;
  movieName.classList.add("showMovieInfo");

  movieAbout.classList.remove("hideMovieInfo");
  movieAbout.innerHTML = stateMovies.movies[num].about;
  movieAbout.classList.add("showMovieInfo");

  seeMoreButton.classList.remove("hideMovieInfo");
  seeMoreButton.classList.add("showMovieInfo");

  seeMoreLink.href = stateMovies.movies[num].url;
}

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

function showPreviousTrailer() {
  movieCreator.classList.remove("showMovieInfo");
  movieCreator.classList.add("hideMovieInfo");

  movieName.classList.remove("showMovieInfo");
  movieName.classList.add("hideMovieInfo");

  movieAbout.classList.remove("showMovieInfo");
  movieAbout.classList.add("hideMovieInfo");

  seeMoreButton.classList.remove("showMovieInfo");
  seeMoreButton.classList.add("hideMovieInfo");

  stateMovies.movieCounter =
    (stateMovies.movies.length + stateMovies.movieCounter - 1) %
    stateMovies.movies.length;
  setTimeout(() => setMovie(stateMovies.movieCounter), 500);
}

function showNextTrailer() {
  movieCreator.classList.remove("showMovieInfo");
  movieCreator.classList.add("hideMovieInfo");

  movieName.classList.remove("showMovieInfo");
  movieName.classList.add("hideMovieInfo");

  movieAbout.classList.remove("showMovieInfo");
  movieAbout.classList.add("hideMovieInfo");

  seeMoreButton.classList.remove("showMovieInfo");
  seeMoreButton.classList.add("hideMovieInfo");

  stateMovies.movieCounter =
    (stateMovies.movieCounter + 1) % stateMovies.movies.length;
  setTimeout(() => setMovie(stateMovies.movieCounter), 500);
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
leftArrow.addEventListener("click", showPreviousTrailer);
rightArrow.addEventListener("click", showNextTrailer);
closeMenuButton.addEventListener("click", closeMenu);
menuButton.addEventListener("click", openMenu);
