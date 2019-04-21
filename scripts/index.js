var brandimg = document.getElementsByClassName('brand-img')[0];
var logo = document.getElementsByClassName('full-welcome-holder')[0];
var logo1 = document.getElementsByClassName('welcome-holder')[0];
var name1 = document.getElementsByClassName('name-anims')[0];
var blinky = document.getElementsByClassName('blinky')[0];
var play = document.getElementsByClassName('play')[0];

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
      setTimeout(() => {contact1.classList.toggle('hidden')}, 1100);
      setTimeout(() => {contact2.classList.toggle('hidden')}, 1100);
      setTimeout(() => {contact3.classList.toggle('hidden')}, 1100);
      setTimeout(() => {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(() => {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}

brandimg.classList.toggle('active');
setTimeout(() => {
  contactbutt.classList.toggle('active');
  document.getElementsByClassName('contact-button active')[0].addEventListener( 'click', pullContactMenu, false);
  logo.classList.toggle('active');
}, 3000);
setTimeout(() => {name1.classList.toggle('active')}, 4000);
setTimeout(() => {
  logo1.classList.toggle('active');
  play.classList.toggle('active');
}, 5000);
setTimeout(() => {
  logo1.classList.toggle('active');
  logo1.classList.toggle('infinite');
  blinky.classList.toggle('active');
}, 6000);

/*******************************************************************************
*******************************************************************************/

// INFINITE ANIMATIONS

// Typing animation text
const printWords = ["    Programmer.          ", "    Electrical Engineer.          "];
let i=0;
let timer;

// function to completely type out
function typeOut() {
  let printWord = printWords[i].split("");
  var typeLoop = function() {
    if(printWord.length > 0) {   // check if word has all been printed out
      document.getElementById("scrolling-word").innerHTML += printWord.shift();
    }
    else {
      deleteType();       // start deleting if all words printed out
      return false;               // exit function
    }
    timer = setTimeout(typeLoop, 200);      // callback when done 1 letter
  };
  typeLoop();                    // backup1
}

function deleteType() {
  let printWord = printWords[i].split("");
  var deleteLoop = function() {
    if(printWord.length > 0) {   // check if still have words
      printWord.pop();           // remove last letter in word
      document.getElementById("scrolling-word").innerHTML = printWord.join("");
    }
    else {
      if(i+1 < printWords.length) i++;
      else i=0;
      typeOut();                 // start typing again if all words removed
      return false;               // exit function
    }
    timer = setTimeout(deleteLoop, 30);      // callback when done 1 letter
  };
  deleteLoop();                  // backup1
}

setTimeout(typeOut, 7000); // start
var moveForce = 15; // max popup movement in pixels
var rotateForce = 10; // max popup rotation in deg

$(document).mousemove(function(e) {
  var docX = $(document).width();
  var docY = $(document).height();

  var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
  var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

  var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
  var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

  $('.full-welcome-holder')
    .css('left', moveX+'px')
    .css('top', moveY+'px')
    .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');

  $('.welcome-holder')
    .css('filter', 'drop-shadow(' + moveX + 'px ' + moveY/2 + 'px 10px #3caea3)');

  });
