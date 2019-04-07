
// Background Effects
let canvasList = document.getElementsByClassName('boxcanvas');

var oc = document.getElementById('Outer-Circle');
var ic = document.getElementById('Inner-Circle');
var poly = document.getElementById('Polygon1');

var blinky = document.getElementsByClassName('blinky')[0];

// MAIN MENU ACTIVATIONS

var nameglitch = document.getElementById('fn_main');
var nameholder1 = document.getElementById('fn_main1');
var nameholder2 = document.getElementById('fn_main2');
var nameholder  = document.getElementsByClassName('name-holder')[0];
var loadholder = document.getElementsByClassName('load-holder')[0];
var textholder = document.getElementsByClassName('text-holder');
var load2holder  = document.getElementsByClassName('extended-welcome-holder')[0];

// CONTACT MENU

var contactbutt = document.getElementsByClassName('contact-button')[0];
var contact1 = document.getElementsByClassName('contact-1')[0];
var contact2 = document.getElementsByClassName('contact-2')[0];
var contact3 = document.getElementsByClassName('contact-3')[0];

var contactimg1 = document.getElementsByClassName('close-contact-tab-img-1')[0];
var contactimg2 = document.getElementsByClassName('close-contact-tab-img-2')[0];

var pullContactMenu = function() {
  if(contact1.classList.length == 1) {  // if bar hidden
    contact1.classList.toggle('active');
    setTimeout(function() {contact2.classList.toggle('active')}, 100);
    setTimeout(function() {contact3.classList.toggle('active')}, 200);
    setTimeout(function() {contactimg1.classList.toggle('active')}, 50);
    contactimg2.classList.toggle('active');
  }
  else {  // if bar is being shown
    if(contact1.classList[1].indexOf('hidden') > -1) {} // bug fix
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





// Load Main Menu
oc.classList.toggle('active');
ic.classList.toggle('active');
for(let i = 0; i < 4; i++) {
  poly.classList.toggle('active');
  poly = poly.nextElementSibling;
}
loadholder.classList.toggle('active');
setTimeout(function() {
  loadholder.classList.toggle('active');
  loadholder.classList.toggle('infinite');
  load2holder.classList.toggle('infinite');
}, 10000);
setTimeout(function() {
  nameholder1.classList.toggle('active');
  nameholder2.classList.toggle('active');
}, 7000);
setTimeout(function() {}, 7000);
setTimeout(function() {
  nameholder1.classList.toggle('active');
  nameholder2.classList.toggle('active');
  nameholder.classList.toggle('active');
  nameglitch.classList.toggle('active');
}, 12000);
setTimeout(function() {
  contactbutt.classList.toggle('active');
  document.getElementsByClassName('contact-button active')[0].addEventListener( 'click', pullContactMenu, false);
}, 11000);
setTimeout(function() {blinky.classList.toggle('active');}, 14000);


for(let i = 0; i < 9; i++) {
  let j = 8500;
  j += i * 200;
  setTimeout(function() {textholder[i].classList.toggle('active');}, j);
}





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

setTimeout(typeOut, 15000); // start
