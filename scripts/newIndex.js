var brandimg = document.getElementsByClassName('brand-img')[0];
var name1 = document.getElementsByClassName('name-anims')[0];
var blinky = document.getElementsByClassName('blinky')[0];
var play = document.getElementsByClassName('play')[0];
var backbrand = document.getElementById('back-brand');
var canvasdiv = document.getElementById('canvas-div');
var credsbox = document.getElementsByClassName('creds-box')[0];

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
      setTimeout(() => {contact1.classList.toggle('hidden')}, 1100);
      setTimeout(() => {contact2.classList.toggle('hidden')}, 1100);
      setTimeout(() => {contact3.classList.toggle('hidden')}, 1100);
      setTimeout(() => {document.getElementsByClassName("contact-tab")[0].style.display = "none"}, 1100);
      setTimeout(() => {contactimg1.classList.toggle('hidden')}, 500);
      setTimeout(() => {contactimg2.classList.toggle('hidden')}, 500);

    }
  }
}

/*******************************************************************************
      3D THREE.JS ANIMATIONS
*******************************************************************************/

var object;
var mouseX = 0;
var mouseY = 0;
var scene, camera, renderer, ee;
var ring, ringG, ringM;

/*******************************************************************************
*******************************************************************************/
//  VARIABLE PARAMETERS
var limitRot = 0;
var modelNum = 0;
var modelNumNext = 0;
/*******************************************************************************
*******************************************************************************/

function init() {
  // Three things needed for three.js: Scene, Camera, Renderer
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x1a1a1a );
  // Camera: FOV (field of view, degrees), aspect ratio, near and far clipping pane
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 100);
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  ee = canvasdiv.appendChild( renderer.domElement );

  // Allow scene to change with resizing of the window
  window.addEventListener( 'resize', () => {
    if ( window.innerWidth <= 600 ) {
      object.position.x = 1;
      object.position.y = -3.5;
      object.scale.set( 0.5, 0.5, 0.5 );
      ring.position.x = 1;
    }
    else {
      object.position.x = 4;
      object.position.y = -3;
      object.scale.set( 0.7, 0.7, 0.7 );
      ring.position.x = 3;
    }
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, false );

  // adjust camera position
  camera.position.z = 10
  camera.lookAt( 0, 0, 0 );

  // Allow controlling scene/camera with mouseclicks and mouse movement
  // controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function loadModel() {
  // Adding objects
  var loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    '../media/models/elf/elf2.gltf',

    function( gltf ) {
      object = gltf.scene; // THREE.Scene


      setTimeout( () => {   // allow model to load first
        if ( window.innerWidth <= 600 ) {
          object.position.x = 1;
          object.position.y = -3.5;
          object.scale.set( 0.5, 0.5, 0.5 );
        }
        else {
          object.position.x = 4;
          object.position.y = -3;
          object.scale.set( 0.7, 0.7, 0.7 );
        }
        object.position.z = -2;
        object.castShadow = true;
        object.receiveShadow = true;
        object.traverse( (node) => {
          if( node instanceof THREE.Mesh ) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        })
        scene.add( object );

      }, 0 );
    },

    function( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },

    function( err ) {
      console.error( "An error happened!" );
    }
  );
}

function loadRing() {
  ringG = new THREE.RingGeometry( 2, 3, 32 );
  ringM = new THREE.MeshBasicMaterial( { color: 0x3caea3, side: THREE.DoubleSide } );
  ring = new THREE.Mesh( ringG, ringM );
  var pointLight = new THREE.PointLight( 0x3caea3, 0.75);
  ring.add( pointLight );
  scene.add( ring );

  if ( window.innerWidth <= 600 ) {
    ring.position.x = 1;
    ring.scale.set( 0.4, 0.4, 0.4 );
  }
  else {
    ring.position.x = 3;
    ring.scale.set( 0.5, 0.5, 0.5 );
  }

  ring.castShadow = true;
  ring.receiveShadow = true;
  ring.position.y = -3.5;
  ring.position.z = -2;
  ring.rotation.x = Math.PI/2;
}


/*******************************************************************************/

function ringGlow() {
  // SUPER SIMPLE GLOW EFFECT
  // use sprite because it appears the same from all angles
  var spriteMaterial = new THREE.SpriteMaterial(
  {
    map: new THREE.ImageUtils.loadTexture( './media/models/glowsprite.png' ),
    color: 0x3caea3, transparent: false, blending: THREE.AdditiveBlending
  });
  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set(10, 4, 0.1);
  ring.add(sprite); // this centers the glow at the mesh
}

/*******************************************************************************/

function addLighting() {
  var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );
  scene.add( ambientLight );

  var spotlightDown1 = new THREE.SpotLight( 0xFFFFFF, 1);
  spotlightDown1.position.y = 10;
  spotlightDown1.position.x = 10;
  spotlightDown1.position.z = 10;
  scene.add ( spotlightDown1 );

  var helper = new THREE.CameraHelper( spotlightDown1.shadow.camera );
  // scene.add( helper );
}


// Functions to run animation
// render entire scene
var render = () => {
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
};

// update the renderer
var update = () => {
  requestAnimationFrame( update );
  if( limitRot == 1 ) {
    if( object.rotation.y + Math.atan(10*mouseX)/100 > 0.4 && limitRot == 1 ) object.rotation.y = 0.4;
    else if(object.rotation.y + Math.atan(10*mouseX)/100 < -0.4 && limitRot == 1 ) object.rotation.y = -0.4;
    else object.rotation.y += Math.atan(10*mouseX)/100;

    if( object.rotation.x + Math.atan(10*mouseY)/200 > 0) object.rotation.x = 0;
    else if(object.rotation.x + Math.atan(10*mouseY)/200 < -0.15) object.rotation.x = -0.15;
    else object.rotation.x += Math.atan(10*mouseY)/200;

    if(camera.position.y + Math.atan(10*mouseX)/1000 > 0.1) camera.position.y = 0.1;
    else if(camera.position.y + Math.atan(10*mouseX)/1000 < -0.1) camera.position.y = -0.1;
    else camera.position.y += Math.atan(10*mouseX)/1000;

    if(camera.position.x + Math.atan(10*mouseY)/5000 > 0.1) camera.position.x = 0.1;
    else if(camera.position.x + Math.atan(10*mouseY)/5000 < -0.1) camera.position.x = -0.1;
    else camera.position.x += Math.atan(10*mouseY)/5000;
  }

  else {
    object.rotation.y += 0.01;
  }

  render();

};

function initMouseAnims() {
  // Add mouse listeners
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mouseover', onDocumentMouseMove, false );
}

function onDocumentMouseMove( event ) {
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	mouseX = ( event.clientX - windowHalfX ) / windowHalfX;
	mouseY = ( event.clientY - windowHalfY ) / windowHalfY * (0.5);
}

/*******************************************************************
      MAIN 3D INITIALIZATION FUNCTION CALLS
*******************************************************************/

init();
loadModel();
loadRing();
addLighting();
setTimeout(() => {
  if( limitRot == 1) initMouseAnims();
  ringGlow();
  update();
}, 1000 );


/*******************************************************************************
*******************************************************************************/

// INFINITE ANIMATIONS

// Typing animation text
const printWords = ["    Enthusiastic Programmer.          ", "    Electrical Engineer.          ", "    Aspiring Entrepreneur.          "];
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

// FUNCTION CALLS

brandimg.classList.toggle('active');

setTimeout(() => {
  contactbutt.classList.toggle('active');
  document.getElementsByClassName('contact-button active')[0].addEventListener( 'click', pullContactMenu, false);
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
