/*******************************************************************
      Cookies Added
*******************************************************************/
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


/*******************************************************************************
    Function
*******************************************************************************/

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

/*******************************************************************************
    Load Screen Anims
*******************************************************************************/

window.onload = () => {
  if(!readCookie("loaded"))
  {
    brandimg.classList.toggle('active');
    // GLITCH EFFECT ON MAIN LOGO
    setTimeout(() => {
      document.getElementsByClassName('brand-img-left')[0].classList.toggle('active');
      document.getElementsByClassName('brand-img-right')[0].classList.toggle('active');
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 2700);
    setTimeout(() => {
      document.getElementsByClassName('brand-img-left')[0].classList.toggle('active');
      document.getElementsByClassName('brand-img-right')[0].classList.toggle('active');
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 2900);
    setTimeout(() => {
      document.getElementsByClassName('brand-img-left')[0].classList.toggle('active2');
      document.getElementsByClassName('brand-img-right')[0].classList.toggle('active2');
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 3300);
    setTimeout(() => {
      document.getElementsByClassName('brand-img-left')[0].classList.toggle('active2');
      document.getElementsByClassName('brand-img-right')[0].classList.toggle('active2');
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 3800);

    // OTHER FADEIN ANIMATIONS
    setTimeout(() => {
      glitchEffect();
      contactbutt.style.visibility = "visible";
      document.getElementsByClassName('contact-button')[0].addEventListener( 'click', pullContactMenu, false);
    }, 4400);
    setTimeout(() => {
      name1.classList.toggle('active');
    }, 4500);
    setTimeout(() => {
      blinky.classList.toggle('active');
      canvasdiv.style.opacity = "1";
      credsbox.style.opacity = "1";
    }, 5000);
    setTimeout(() => {
      play.classList.toggle('active');
    }, 5500);
    setTimeout(() => {
      typeOut();
    }, 6500);

    createCookie("loaded", "1", 1000);
  }
  else
  {
    contactbutt.style.visibility = "visible";
    document.getElementsByClassName('contact-button')[0].addEventListener( 'click', pullContactMenu, false);
    // INITIAL GLITCH
    setTimeout(() => {
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 200);
    setTimeout(() => {
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 400);
    setTimeout(() => {
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 600);
    setTimeout(() => {
      glitchback1.classList.toggle('active');
      glitchback2.classList.toggle('active');
    }, 800);

    // OTHER FADEIN ANIMATIONS
    setTimeout(() => {
      glitchEffect();
    }, 1000);
    setTimeout(() => {
      name1.classList.toggle('active');
    }, 1200);
    setTimeout(() => {
      blinky.classList.toggle('active');
      canvasdiv.style.opacity = "1";
      credsbox.style.opacity = "1";
    }, 1500);
    setTimeout(() => {
      play.classList.toggle('active');
    }, 2000);
    setTimeout(() => {
      typeOut();
    }, 2500);
  }
}
