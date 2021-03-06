const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
const navContainer = document.getElementById("fixed");
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("view-project");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

hamburger.addEventListener('click', () => {
  navUL.classList.toggle("show");
  navContainer.classList.toggle("fixed");
});



// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Creator's Modal
const creatorModalTrigger = document.getElementById("creator")
const creatorModal = document.getElementById("creator-modal")

creatorModalTrigger.onclick = function () {
  creatorModal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close the creator's modal
window.onclick = function (event) {
  if (event.target == creatorModal) {
    creatorModal.style.display = "none";
  }
}
