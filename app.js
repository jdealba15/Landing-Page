
const toggleBtn = document.getElementById('toggle-nav-button');

toggleBtn.addEventListener('click', changeBtn);
  
function changeBtn() {
    if (document.getElementById("toggle-nav-button").className === "fa-solid fa-bars fa-2x") {
      document.getElementById("toggle-nav-button").className = "fa-solid fa-x fa-2x";
      } else {
      document.getElementById("toggle-nav-button").className = "fa-solid fa-bars fa-2x";
     }
}

const homeNavBtn = document.getElementById('aboutNav');

/*homeNavBtn.addEventListener('click', changeAbt);

function changeAbt() {
  if (document.getElementById("aboutNav").innerHTML === "About") { 
    document.getElementById("aboutNav").innerHTML = "Home";
    } else {
    document.getElementById("aboutNav").innerHTML = "About";
   }
}*/

const navBarEvent = document.getElementById('mobileAbout');

toggleBtn.addEventListener('click', () => {
  navBarEvent.classList.toggle('mobileAboutClick');
})


/* for navredirect to "helloWrold!"*/
const navRedirect = document.querySelector('.rightNav');


/*navRedirect.addEventListener('click', redirectPage);

function redirectPage() {
  if(document.querySelector('.rightNav').innerHTML === "About") {
      location.href="http://127.0.0.1:5500/about.html";
    } else {
      location.href="http://127.0.0.1:5500/index.html";
    }
  }

navBarEvent.addEventListener('click', redirectMobile);

function redirectMobile() {
  if(document.querySelector('.rightNav').innerHTML === "About") {
    location.href="http://127.0.0.1:5500/about.html";
  } else {
    location.href="http://127.0.0.1:5500/index.html";
  }
}*/

const mce = document.getElementById('mce-EMAIL');
const mc = document.getElementById('mc-embedded-subscribe');
const danger = document.getElementById('danger');

/*function required() {
  if (document.getElementById('mce-EMAIL').value.length == 0) {
    alert ("Please enter a valid email...");
    return false;
  }
  return true;
}*/

mc.addEventListener('click', function(e) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mce.value.match(validRegex)) {
      return true;
    } else {
      e.preventDefault();
      danger.style.opacity = "1";
    }
});