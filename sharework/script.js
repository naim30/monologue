let closeMenuButton = document.querySelector(".close-button");
let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");

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

closeMenuButton.addEventListener("click", closeMenu);
menuButton.addEventListener("click", openMenu);

let stateUser = {
  username: { valid: false, value: "" },
  email: { valid: false, value: "" },
  moviename: { valid: false, value: "" },
  trailer: { valid: false, value: "" },
  description: { valid: false, value: "" },
};

let wrapper = document.querySelector(".wrapper");

wrapper.classList.add("showForm");

let inputUsername = document.querySelector("#username");
let inputEmail = document.querySelector("#email");
let inputMoviename = document.querySelector("#moviename");
let inputMovietrailer = document.querySelector("#movietrailer");
let inputDescription = document.querySelector("#description");
let submitButton = document.querySelector(".submit-button");

function validateUsername(event) {
  let user = event.target.value;
  user = user
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  document.querySelector("#username-label").style.display = "none";
  stateUser.username.value = user;
  event.target.value = user;
  if (user.length > 0) {
    document.querySelector("#username-label").style.display = "none";
    stateUser.username.valid = true;
  } else {
    stateUser.username.valid = false;
  }
}

function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateEmail(event) {
  let email = event.target.value;
  stateUser.email.value = email;
  if (validEmail(email)) {
    inputEmail.style.borderColor = "black";
    inputEmail.style.color = "black";
    stateUser.email.valid = true;
    document.querySelector("#email-label").style.display = "none";
  } else {
    inputEmail.style.borderColor = "red";
    inputEmail.style.color = "red";
    stateUser.email.valid = false;
  }
}

function validateMoviename(event) {
  let movie = event.target.value;
  movie = movie
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  stateUser.moviename.value = movie;
  event.target.value = movie;
  if (movie.length > 0) {
    document.querySelector("#moviename-label").style.display = "none";
    stateUser.moviename.valid = true;
  } else {
    stateUser.moviename.valid = false;
  }
}

function validUrl(url) {
  const re =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  return re.test(String(url));
}

function validateMovietrailer(event) {
  let trailer = event.target.value;
  stateUser.trailer.value = trailer;
  if (validUrl(trailer)) {
    inputMovietrailer.style.borderColor = "black";
    inputMovietrailer.style.color = "black";
    stateUser.trailer.valid = true;
    document.querySelector("#movietrailer-label").style.display = "none";
  } else {
    inputMovietrailer.style.borderColor = "red";
    inputMovietrailer.style.color = "red";
    stateUser.trailer.valid = false;
  }
}

function validateDescription(event) {
  let description = event.target.value;
  stateUser.description.value = description;
  if (description.length > 40) {
    document.querySelector("#description-label").style.display = "none";
    stateUser.description.valid = true;
  } else {
    stateUser.description.valid = false;
  }
}

function onSubmit() {
  if (!stateUser.username.valid) {
    document.querySelector("#username-label").style.display = "block";
  }
  if (!stateUser.email.valid) {
    if (stateUser.email.value.length > 0) {
      document.querySelector("#email-label").innerHTML =
        "PLEASE ENTER VALID EMAIL";
      document.querySelector("#email-label").style.display = "block";
    } else {
      document.querySelector("#email-label").innerHTML =
        "PLEASE ENTER YOUR EMAIL";
      document.querySelector("#email-label").style.display = "block";
    }
  }
  if (!stateUser.moviename.valid) {
    document.querySelector("#moviename-label").style.display = "block";
  }
  if (!stateUser.trailer.valid) {
    if (stateUser.trailer.value.length > 0) {
      document.querySelector("#movietrailer-label").innerHTML =
        "PLEASE ENTER VALID URL";
      document.querySelector("#movietrailer-label").style.display = "block";
    } else {
      document.querySelector("#movietrailer-label").innerHTML =
        "PLEASE ENTER URL OF YOUR MOVIE TRAILER";
      document.querySelector("#movietrailer-label").style.display = "block";
    }
  }
  if (!stateUser.description.valid) {
    if (stateUser.trailer.value.length > 0) {
      document.querySelector("#description-label").innerHTML =
        "YOUR DESCRIPTION IS TOO SHORT";
      document.querySelector("#description-label").style.display = "block";
    } else {
      document.querySelector("#description-label").innerHTML =
        "PLEASE ENTER DESCRIPTION OF YOUR MOVIE";
      document.querySelector("#description-label").style.display = "block";
    }
  }
  if (
    stateUser.username.valid &&
    stateUser.email.valid &&
    stateUser.moviename.valid &&
    stateUser.trailer.valid &&
    stateUser.description.valid
  ) {
    window.history.back();
  }
}

inputUsername.addEventListener("input", validateUsername);
inputEmail.addEventListener("input", validateEmail);
inputMoviename.addEventListener("input", validateMoviename);
inputMovietrailer.addEventListener("input", validateMovietrailer);
inputDescription.addEventListener("input", validateDescription);
submitButton.addEventListener("click", onSubmit);
