var brandimg = document.getElementsByClassName('brand-img')[0];

/*******************************************************************************
*******************************************************************************/

var carousel = document.querySelector('.carousel');
var carouselpage = document.getElementsByClassName('carousel_page');
var cellNum = 8;
var activeCells = 5;

var focusPage = 2;
var rotate = 0;
var checkRotate = 0;
var temp = 0;
var calc = 0;

var title = document.getElementsByClassName('title');
var description = document.getElementsByClassName('description');

var navButton = document.getElementsByClassName('nav-button');

function rotateCarousel() {
  if(focusPage >= cellNum) focusPage = 0;
  if(focusPage < 0) focusPage = cellNum - 1;

  var contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  while(contentCheck == 0 && rotate == 0) {
    focusPage++;
    if(focusPage >= cellNum) focusPage = 0;
    contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  }
  while(contentCheck == 0 && rotate == 1) {
    focusPage--;
    if(focusPage < 0) focusPage = cellNum - 1;
    contentCheck = carouselpage[focusPage].getElementsByTagName("img").length;
  }
  var angle = focusPage / cellNum * -360;
  carousel.style.transform = 'translateZ(-1207px) rotateY(' + angle + 'deg)';
  setTimeout(() => {
    title[focusPage].classList.toggle('active');
    title[focusPage].style.setProperty('opacity', '1');
  }, 1600);
  setTimeout(() => {description[focusPage].classList.toggle('active')}, 2000);
  navUpdate();
}

var prevButton = document.querySelector('.previous-button');
var nextButton = document.querySelector('.next-button');

carousel.classList.toggle('active');
setTimeout(() => {
  title[focusPage].classList.toggle('active');
  description[focusPage].classList.toggle('active');
  prevButton.classList.toggle('active');
  nextButton.classList.toggle('active');
  for(let i = 0; i < activeCells; i++) {
    navButton[i].classList.toggle('active');
  }
  navUpdate();
}, 4000);

function navHandler(input) {
  if(checkRotate == 0) {
    title[focusPage].style.setProperty('opacity', '0');
    temp = focusPage - input ;
    setTimeout(() => {title[focusPage + temp].classList.toggle('active')}, 1500);
    description[focusPage].classList.toggle('active');
    checkRotate = 1;
    setTimeout(() => {checkRotate = 0}, 3000);
    focusPage = input;
    rotateCarousel();
  }
}

function navUpdate() {
  for(let i = 0; i < activeCells; i++) {
    navButton[i].style.setProperty('background-color' , '#919191');
  }
  navButton[focusPage].style.setProperty('background-color' , '#fff');
}

prevButton.addEventListener( 'click', function() {
  rotate = 1;
  calc = focusPage - 1 < 0 ? activeCells : focusPage - 1;
  navHandler(calc);
});
nextButton.addEventListener( 'click', () => {
  rotate = 0;
  calc = focusPage + 1 == activeCells ? 0 : focusPage + 1;
  navHandler(calc);
});
for(let i = 0; i < activeCells; i++) {
  navButton[i].addEventListener( 'click', () => {
    rotate = 0;
    navHandler(i);
  });
}


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
      setTimeout(function() {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(function() {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}

brandimg.classList.toggle('active');
setTimeout(() => {
  contactbutt.classList.toggle('active');
  document.getElementsByClassName('contact-button active')[0].addEventListener( 'click', pullContactMenu, false);
}, 0);
