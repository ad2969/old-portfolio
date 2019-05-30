// var brandimg = document.getElementsByClassName('brand-img')[0];
var play = document.getElementsByClassName('play')[0];
var playdiv = document.getElementsByClassName('play-div')[0];

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
    setTimeout(function() {contacthandler = true}, 800);
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
      setTimeout(function() {contact1.classList.toggle('hidden')}, 800);
      setTimeout(function() {contact2.classList.toggle('hidden')}, 800);
      setTimeout(function() {contact3.classList.toggle('hidden')}, 800);
      setTimeout(function() {document.getElementsByClassName("contact-tab")[0].style.display = "none"}, 800);
      setTimeout(function() {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(function() {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}

/*******************************************************************************
    Animation and Picture Data (Base64)
*******************************************************************************/

var menu = document.getElementsByClassName('menu')[0];
var menubutton = document.getElementsByClassName('menu-open')[0];
var menuopenbutton = document.getElementsByClassName('menu-open-button')[0];
var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");
var particles = [];
var zoom = 2.5;
if( window.innerWidth <= 400) {
  if( window.innerHeight >= 800) zoom = 2.2;
  else zoom = 1.5;
}
else if( window.innerWidth <= 800) {
  if(window.innerHeight <= 400) zoom = 1;
  else if(window.innerHeight <= 600) zoom = 1.5;
  else if(window.innerHeight <= 1000) zoom = 2;
  else zoom = 2.5;
}
else {
  if(window.innerHeight <= 400) zoom = 1;
  else if(window.innerHeight <= 600) zoom = 2;
}
var png = new Image();
png.src = "data:image/png;base64,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";

function drawScene() {
  menu.style.display = "flex";
  canvas.width = png.width*zoom;
  canvas.height = png.height*zoom;

  ctx.drawImage(png, 0, 0);

  var data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var y = 0, y2 = data.height; y < y2; y+=2) {
    for (var x = 0, x2 = data.width; x < x2; x+=2) {
        var particle = {
          x0: x,
          y0: y,
          x1: png.width / 2,
          y1: png.height / 2,
          color: "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")",
          speed: Math.random() * 4 + 2
        };
        TweenMax.to(particle, particle.speed, {
          x1: particle.x0,
          y1: particle.y0,
          delay: y / 130,
          ease: Elastic.easeOut
        });
        particles.push(particle);
      }
  }
  requestAnimationFrame(render);
}

function updateScene() {
  canvas.width = png.width*zoom;
  canvas.height = png.height*zoom;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(render);
}

var render = function() {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0, j = particles.length; i < j; i++) {
    var particle = particles[i];
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x1*zoom, particle.y1*zoom, 2, 2);
  }

};

if(window.innerWidth <= 800 && window.innerHeight >= 501) {
  if( menubutton.checked == true ) {
    playdiv.classList.add('moveaside');
  }
  menubutton.addEventListener('click', () => { playdiv.classList.toggle('moveaside') });
}
window.addEventListener('resize', () => {
  if( window.innerWidth <= 400) {
    if( window.innerHeight >= 800) zoom = 2.2;
    else zoom = 1.5;
  }
  else if( window.innerWidth <= 800) {
    if(window.innerHeight <= 400) zoom = 1;
    else if(window.innerHeight <= 600) zoom = 1.5;
    else if(window.innerHeight <= 1000) zoom = 2;
    else zoom = 2.5;
  }
  else {
    if(window.innerHeight <= 400) zoom = 1;
    else if(window.innerHeight <= 600) zoom = 2;
  }
  updateScene();
});

/*******************************************************************************
    Transition Anims
*******************************************************************************/

function returnIndex() {
  window.location.href = "./index.html";
  return false;
}
function redirectProjects() {
  window.location.href = "./projects.html";
  return false;
}

menuItem = document.getElementsByClassName('menu-item');

play.onclick = () => { prevPageTransition() };
menuItem[1].onclick = () => {
  nextPageTransition();
  setTimeout(() => { redirectProjects() }, 1200);
};

/*******************************************************************************
    Page Transitions
*******************************************************************************/

function prevPageTransition() {
  play.classList.add('fadeout-anims');
  play.classList.remove('active');

  setTimeout(() => {
    menu.classList.add('fadeout-anims');
    setTimeout(() => { menu.style.display = "none" }, 500)
  }, 500);

  setTimeout(() => { returnIndex() }, 1200);

}

function nextPageTransition() {
  play.classList.add('fadeout-anims');
  play.classList.remove('active');
  setTimeout(() => {
    menu.classList.add('fadeout-anims');
    setTimeout(() => { menu.style.display = "none" }, 500)
  }, 500);
}

/*******************************************************************************
    Modal Load
*******************************************************************************/

var modalback = document.getElementsByClassName("modal-back")[0];
var modal = document.getElementsByClassName("modal")[0];
var close = document.getElementsByClassName("close")[0];

function openModal() {
  setTimeout(() => { modalback.style.backgroundColor = "rgba(0,0,0,0.8)"}, 50);
  setTimeout(() => { modal.style.height = "100%" }, 750);
  setTimeout(() => { modal.style.width = "100%" }, 750);
  setTimeout(() => {
    close.addEventListener( "click", closeModal);
    close.style.cursor = "pointer";
   }, 1500);
}

function closeModal() {
  close.style.cursor = "unset";
  close.removeEventListener( "click", closeModal );
  modal.style.height = "0";
  modal.style.width = "0";
  setTimeout(() => { modalback.style.opacity = "0" }, 1000);
  setTimeout(() => { modalback.style.display = "none" }, 1500);
  setTimeout(() => { drawScene() }, 1000);
  setTimeout(() => { play.classList.toggle('active') }, 2000);
  setTimeout(() => { glitchEffect() }, 3000);
}

/*******************************************************************************
    Background Glitch Effect
*******************************************************************************/
var glitchback1 = document.getElementsByClassName('glitch-back')[0];
var glitchback2 = document.getElementsByClassName('glitch-back-2')[0];

function glitchEffect() {
  glitchback1.classList.toggle('active-inf');
  glitchback2.classList.toggle('active-inf');

  setTimeout(() => {
    glitchback1.classList.toggle('active-inf');
    glitchback2.classList.toggle('active-inf');
  }, 1000);

  setTimeout(() => {
    glitchEffect();
  }, 10000);
}
