// Create variables targetting the relevant DOM elements here 👇
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var coverForm = document.querySelector('.make-new-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
coverForm.addEventListener('click', openForm);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function openForm() {
  homePage.classList.add('hidden');
  formPage.classList.remove('hidden');
}
