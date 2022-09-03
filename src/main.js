// Create variables targetting the relevant DOM elements here 👇
// Page views
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedPage = document.querySelector('.saved-view');
// Navigation buttons
var coverButton = document.querySelector('.random-cover-button');
var createCoverButton = document.querySelector('.create-new-book-button')
var coverFormButton = document.querySelector('.make-new-button');
var saveButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
// Cover elements linked to home page display
var cover = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var savedCoversSection = document.querySelector('.saved-covers-section')

var newCover;

// We've provided a few variables below


var newCover = new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇
// Opens form-view when button is clicked
coverFormButton.addEventListener('click', openForm);
// Changes cover when cover button is clicked
coverButton.addEventListener('click', changeCovers);
// Opens saved covers view when button is clicked
viewSavedButton.addEventListener('click', openSavedCovers);
// Opens home page view when button is clicked
homeButton.addEventListener('click', openHomePage);
// Creates new book cover from user inputs
createCoverButton.addEventListener('click', createNewBook);
// Save button functionality
saveButton.addEventListener('click', copyHomePage);

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// Saves home page cover to savedCovers array
function copyHomePage() {
  if (!savedCovers.includes(newCover)) {
    savedCovers.push(newCover)
    updateViewSavedCover(newCover)
  }
}
// Creates new book
function createNewBook() {
  event.preventDefault();
  var userCover = document.querySelector('.user-cover')
  var userTitle = document.querySelector('.user-title')
  var userDesc1 = document.querySelector('.user-desc1')
  var userDesc2 = document.querySelector('.user-desc2')

  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value)
  descriptors.push(userDesc2.value)

  newCover = makeCoverInstance(userCover.value, userTitle.value, userDesc1.value, userDesc2.value)

  displayCover(newCover)
  openHomePage()
}
// Updates home page cover based on cover class
function displayCover(coverInstance) {
  cover.src = coverInstance.cover
  title.innerText = coverInstance.title
  descriptor1.innerText = coverInstance.tagline1
  descriptor2.innerText = coverInstance.tagline2
}
// Opens form-view
function openForm() {
  homePage.classList.add('hidden');
  coverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formPage.classList.remove('hidden');
}
// Opens saved-covers view
function openSavedCovers() {
  homePage.classList.add('hidden');
  saveButton.classList.add('hidden');
  coverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedPage.classList.remove('hidden');
}
// Opens home page
function openHomePage() {
  savedPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  formPage.classList.add('hidden');
  saveButton.classList.remove('hidden');
  coverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  coverFormButton.classList.remove('hidden');
  homePage.classList.remove('hidden');
}
// Generates random cover and changes home page display
function changeCovers() {
  newCover = makeCoverInstance(selectRandomCover(), selectRandomTitle(), selectRandomDescriptor(), selectRandomDescriptor())
  displayCover(newCover)
}
// Pulls random values for changeCovers function
function selectRandomCover() {
  return covers[getRandomIndex(covers)]
}
function selectRandomTitle() {
  return titles[getRandomIndex(titles)]
}
function selectRandomDescriptor() {
  return descriptors[getRandomIndex(descriptors)]
}
// Instantiates a new cover instance from
function makeCoverInstance(cover, title, desc1, desc2) {
  return new Cover(cover, title, desc1, desc2);
}
//     <section class="main-cover">
//         <img class="cover-image" src="./assets/prairie.jpg">
//         <h2 class="cover-title">Windswept Hearts</h2>
//         <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
//         <img class="price-tag" src="./assets/price.png">
//         <img class="overlay" src="./assets/overlay.png">
//       </section>
function addElement() {
  const newImg = document.createElement('img')
  newImg.classList.add("cover-image")
  newImg.createAttribute("src")
}

function updateViewSavedCover(newCover) {
  var newCoverStructure = `<section id="${newCover.id}" class="mini-cover">
  <img class="mini-cover" src="${newCover.cover}">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of ${newCover.tagline1} and ${newCover.tagline2}</span></h3>
  </section>`

  savedCoversSection.innerHTML = savedCoversSection.innerHTML + newCoverStructure
}
