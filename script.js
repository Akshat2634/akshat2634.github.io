function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let prevScrollPos = window.pageYOffset;
let prevScrollPosFooter = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  // Scrolling behavior for desktop nav
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.getElementById("desktop-nav").classList.add("visible");
    document.getElementById("desktop-nav").classList.remove("hidden");
  } else {
    // Scrolling down
    document.getElementById("desktop-nav").classList.add("hidden");
    document.getElementById("desktop-nav").classList.remove("visible");
  }

  // Scrolling behavior for footer
  if (prevScrollPosFooter < currentScrollPos) {
    // Scrolling down
    document.querySelector("footer").classList.add("visible");
    document.querySelector("footer").classList.remove("hidden");
  } else {
    // Scrolling up
    document.querySelector("footer").classList.remove("visible");
    document.querySelector("footer").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
  prevScrollPosFooter = currentScrollPos;
};

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGgAFSw8dy4OXMyE6TvxMd_48RGOA0ASQ",
  authDomain: "portfoliowebsiteakshatsahu.firebaseapp.com",
  databaseURL: "https://portfoliowebsiteakshatsahu-default-rtdb.firebaseio.com",
  projectId: "portfoliowebsiteakshatsahu",
  storageBucket: "portfoliowebsiteakshatsahu.appspot.com",
  messagingSenderId: "243305174311",
  appId: "1:243305174311:web:85b2c56aa4437e4566c502",
};
firebase.initializeApp(firebaseConfig);

// Reference Messages Collection
var messageRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit Form
function submitForm(e) {
  e.preventDefault();

  // get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  // save message
  saveMessage(name, email, subject, message);

  // display snackbar
  showSnackbar();

  // reset form
  document.getElementById("contactForm").reset();
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, email, subject, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}

function showSnackbar() {
  // Get the snackbar element
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to display the snackbar
  snackbar.className = "show";

  // After 3 seconds, remove the "show" class to hide the snackbar
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000); // Adjust the duration as needed (in milliseconds)
}

// Scroll to top button
const toTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 560) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
