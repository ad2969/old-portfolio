var object;
var mouseX = 0;
var mouseY = 0;
var scene, camera, renderer, ee;

function init() {
  // Three things needed for three.js: Scene, Camera, Renderer
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x1a1a1a );
  // Camera: FOV (field of view, degrees), aspect ratio, near and far clipping pane
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000);
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  ee = document.body.appendChild( renderer.domElement );

  // Allow scene to change with resizing of the window
  window.addEventListener( 'resize', () => {
    var width = window.innerWidth
    var height  = window.innerheight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  } );

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
    '../media/models/scene.gltf',

    function( gltf ) {
      object = gltf.scene; // THREE.Scene


      setTimeout( () => {   // allow model to load first
        object.position.x = 6;
        object.position.y = -3;
        object.position.z = -2;
        object.scale.set( 20, 20, 20 );

        object.castShadow = true;
        object.receiveShadow = false;
        object.traverse( (node) => {
          if( node instanceof THREE.Mesh ) {
            node.castShadow = true;
            node.receiveShadow = false;
          }
        })
        scene.add( object );

      }, 1000 );
    },

    function( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },

    function( err ) {
      console.error( "An error happened!" );
    }
  );
}

function addFloor() {
  var floorGeometry = new THREE.CubeGeometry( 10, 1, 10 );
  var floorMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load( './models/template/wood_fine.png' ), side: THREE.FrontSide });
  var floorCube = new THREE.Mesh( floorGeometry, floorMaterial );
  floorCube.position.y = -5;
  floorCube.receiveShadow = true;

  scene.add( floorCube );
}

function addLighting() {
  var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.1 );
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
    renderer.render( scene, camera );
};

// update the renderer
var update = () => {
  requestAnimationFrame( update );

  if( object.rotation.y + Math.atan(10*mouseX)/400 > 0.3) object.rotation.y = 0.3;
  else if(object.rotation.y + Math.atan(10*mouseX)/400 < -0.3) object.rotation.y = -0.3;
  else object.rotation.y += Math.atan(10*mouseX)/400;

  if( object.rotation.x + Math.atan(10*mouseY)/800 > 0.1) object.rotation.x = 0.1;
  else if(object.rotation.x + Math.atan(10*mouseY)/800 < -0.1) object.rotation.x = -0.1;
  else object.rotation.x += Math.atan(10*mouseY)/800;

  if(camera.position.y + Math.atan(10*mouseX)/1000 > 0.1) camera.position.y = 0.1;
  else if(camera.position.y + Math.atan(10*mouseX)/1000 < -0.1) camera.position.y = -0.1;
  else camera.position.y += Math.atan(10*mouseX)/1000;

  if(camera.position.x + Math.atan(10*mouseY)/5000 > 0.1) camera.position.x = 0.1;
  else if(camera.position.x + Math.atan(10*mouseY)/5000 < -0.1) camera.position.x = -0.1;
  else camera.position.x += Math.atan(10*mouseY)/5000;

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
      MAIN INITIALIZATION FUNCTION CALLS
*******************************************************************/

init();
loadModel();
addLighting();
setTimeout(() => {
  initMouseAnims();
  update();
}, 1500 );
