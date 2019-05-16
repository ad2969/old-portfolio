var brandimg = document.getElementsByClassName('brand-img')[0];
var header = document.getElementsByClassName('header')[0];
var title = document.getElementsByClassName('title');
var caption = document.getElementsByClassName('caption');
var line = document.getElementsByClassName('line')[0];
var left = document.getElementsByClassName('left-mainpage')[0];
var right = document.getElementsByClassName('right-mainpage')[0];

/*******************************************************************************
*******************************************************************************/

// CONTACT MENU

var contactbutt = document.getElementsByClassName('contact-button')[0];
var contact1 = document.getElementsByClassName('contact-1')[0];
var contact2 = document.getElementsByClassName('contact-2')[0];
var contact3 = document.getElementsByClassName('contact-3')[0];

var contactimg1 = document.getElementsByClassName('close-contact-tab-img')[0];
var contactimg2 = document.getElementsByClassName('close-contact-tab-img')[1];
var contacthandler = true;

var pullContactMenu = function() {
  if(contact1.classList.length == 1) {  // if bar hidden
    document.getElementsByClassName("contact-tab")[0].style.display = "block";
    contact1.classList.toggle('active');
    setTimeout(function() {contact2.classList.toggle('active')}, 100);
    setTimeout(function() {contact3.classList.toggle('active')}, 200);
    setTimeout(function() {contactimg1.classList.toggle('active')}, 50);
    contactimg2.classList.toggle('active');
    contacthandler = false;
    setTimeout(function() {contacthandler = true}, 1100);
  }
  else {  // if bar is being shown
    if(contact1.classList[1].indexOf('hidden') > -1 | contacthandler == false) {} // bug fix
    else if(contact1.classList[1].indexOf('active') > -1) {
      contact1.classList.toggle('active');
      contact2.classList.toggle('active');
      contact3.classList.toggle('active');
      contactimg1.classList.toggle('active')
      contactimg2.classList.toggle('active');

      contact1.classList.toggle('hidden');
      contact2.classList.toggle('hidden');
      contact3.classList.toggle('hidden');
      contactimg1.classList.toggle('hidden');
      contactimg2.classList.toggle('hidden');

      // remove hidden
      setTimeout(function() {contact1.classList.toggle('hidden')}, 1100);
      setTimeout(function() {contact2.classList.toggle('hidden')}, 1100);
      setTimeout(function() {contact3.classList.toggle('hidden')}, 1100);
      setTimeout(function() {document.getElementsByClassName("contact-tab")[0].style.display = "none"}, 1100);
      setTimeout(function() {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(function() {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}

/*******************************************************************
      PARTICLE.JS STUFF
*******************************************************************/

function loadParticles() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
}); }

var particles = document.getElementById('particles-js');


/*******************************************************************
      FADEOUT ANIMATiONS
*******************************************************************/

function nextPageTransition() {
  right.classList.add('fadeout');
  left.classList.add('fadeout');
}

/*******************************************************************
      FUNCTION CALLS
*******************************************************************/

// loadParticles();

brandimg.classList.toggle('active');
setTimeout(() => {
  contactbutt.classList.toggle('active');
  document.getElementsByClassName('contact-button active')[0].addEventListener( 'click', pullContactMenu, false);
}, 0);
setTimeout(() => {header.classList.toggle('active')}, 0);

for(let i = 0; i < 4; i++) {
  let j = 500;
  j += i * 100;
  setTimeout(() => {title[i].classList.toggle('active')}, j);
}

for(let i = 0; i < 7; i++) {
  let j = 800;
  j += i * 50;
  setTimeout(() => {caption[i].classList.toggle('active')}, j);
}

setTimeout(() => {
  line.classList.add('quick');
  line.style.height = "0";
}, 2100);
// setTimeout(() => { particles.style.opacity = "1" }, 3500);
