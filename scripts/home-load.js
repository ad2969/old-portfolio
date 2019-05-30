/*******************************************************************************
      Cookies Added
*******************************************************************************/
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
    Load Screen Anims
*******************************************************************************/

contactbutt.addEventListener( 'click', pullContactMenu, false);

window.onload = () => {
  if(!readCookie("loaded")) {
    modalback.style.display = "block";
    setTimeout(() => { openModal() }, 1000);
    createCookie("loaded", "1", 1000);
  }
  else {
    if( window.innerWidth <= 800 && window.innerHeight >= 501 ) {
      setTimeout(() => { play.classList.toggle('active') }, 1500); }
    else { setTimeout(() => { play.classList.toggle('active') }, 3000); }
    menu.style.display = "flex";
    updateScene();
    window.addEventListener('resize', updateScene);
    glitchEffect();
  }
}

// brandimg.classList.toggle('active');
