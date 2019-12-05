import React from 'react';
import * as THREE from 'three';

const style = {
	backgroundColor: "white",
	position: "absolute",
	width: "100%",
	height: "100%",
  left: 0,
  top: 0,
	overflow: "hidden",
	background: "linear-gradient(#ffffff, #d3d3d3)",
}

//****** COLORS
const Colors = {
	white : 0xffffff,
  cloud : 0x2b2b2b,
  grey  : 0x848484,
  black : 0x000000
};

//****** CUSTOMIZABLE VARIABLES
const options = {
  speed           : 0.00001,
  cloudSpeed      : 0.0001,
	numClouds				: 12
};

const worldOpt = {
  radius: 150,
  length: 200
}

const groundOpt = {
  minAmp : 5,
  maxAmp : 20,
  minSpeed : 0.001,
  maxSpeed : 0.003
}

const cameraOpt = {
  position_x: 0,
  position_y: 100,
  position_z: 400,

  fieldOfView : 50,
  nearPlane   : 0.1,
  farPlane    : 10000
};

class ThreeBackground extends React.Component {

  componentDidMount() {
    console.log("3D Canvas Unmounted!");

    // Declarations
    var deltaTime = 0;
    var newTime   = new Date().getTime();
    var oldTime   = new Date().getTime();

    //****** MAIN SCENE

    var scene,
    camera,
    renderer,
    container;

    function createScene() {
      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;

      // Initialize Scene
      scene = new THREE.Scene();

      // Initialize Camera
      camera = new THREE.PerspectiveCamera(
        cameraOpt.fieldOfView = 50,
        cameraOpt.aspectRatio = WIDTH / HEIGHT,
        cameraOpt.nearPlane = 0.1,
        cameraOpt.farPlane = 100000
      );
      scene.fog = new THREE.Fog(0x2b2b2b, 100, 950);
      camera.position.x = cameraOpt.position_x;
      camera.position.y = cameraOpt.position_y;
      camera.position.z = cameraOpt.position_z;

      // Initialize Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(WIDTH, HEIGHT);

      renderer.shadowMap.enabled = true;

      // Add to DOM Container
      container = document.getElementById('canvas');
      container.appendChild(renderer.domElement);
    }
    function handleWindowResize() {
      const HEIGHT  = window.innerHeight;
      const WIDTH   = window.innerWidth;

      renderer.setSize(WIDTH, HEIGHT);

      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    }

    //****** SCENE LIGHTING

    var ambientLight, hemisphereLight, shadowLight;

    function createLights() {
      // Gradient Lighting
      hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x00000, 0.7)

      // Ambient Lighting
      ambientLight = new THREE.AmbientLight(0xffffff, 0.7);

      // Directional Lighting
      shadowLight = new THREE.DirectionalLight(0xffffff, 0.7);
      shadowLight.position.set(150, 350, 350);

      shadowLight.castShadow            = true;
      shadowLight.shadow.camera.left    = -400;
      shadowLight.shadow.camera.right   = 400;
      shadowLight.shadow.camera.top     = 400;
      shadowLight.shadow.camera.bottom  = -400;
      shadowLight.shadow.camera.near    = 1;
      shadowLight.shadow.camera.far     = 1000;
      shadowLight.shadow.mapSize.width  = 4096;
      shadowLight.shadow.mapSize.height = 4096;

      // Camera Helper (debugging)
      //var ch = new THREE.CameraHelper(shadowLight.shadow.camera);
      //scene.add(ch);

      // Add lighting to scene
      scene.add(hemisphereLight);
      scene.add(shadowLight);
      scene.add(ambientLight);
    }

    //****** WORLD MODEL

    var World = function() {
      // Initialize a 3D Model
      var geom = new THREE.CylinderGeometry(worldOpt.radius,worldOpt.radius,worldOpt.length,40,10);
      geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
      geom.mergeVertices();
      var len = geom.vertices.length;

      // Add unlevel ground
      this.ground = [];
      for( var i = 0; i < len; i++ ) {
        var v = geom.vertices[i];
        this.ground.push({
          y     : v.y,
          x     : v.x,
          z     : v.z,
          ang   : Math.random()*Math.PI*2,
          amp   : groundOpt.minAmp + Math.random() * (groundOpt.maxAmp-groundOpt.minAmp),
          speed : groundOpt.minSpeed + Math.random() * (groundOpt.maxSpeed-groundOpt.minSpeed)
        });
      };
      // Material
      var mat = new THREE.MeshPhongMaterial({
        color       : Colors.grey,
        transparent : true,
        opacity     : 0.8,
        flatShading : THREE.FlatShading,
      });

      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.receiveShadow = true;

    }

    // Function to move world
    World.prototype.moveGround = function (){
      var verts = this.mesh.geometry.vertices;
      var len = verts.length;
      // Move each
      for( var i = 0; i < len; i++ ) {
        var v       = verts[i];
        var vprops  = this.ground[i];

        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;
        vprops.ang += vprops.speed*deltaTime;

        this.mesh.geometry.verticesNeedUpdate = true;
      }
    }

    //****** WORLD ATMOSPHERE

    // Define Clouds
    var Cloud = function(){
      this.mesh = new THREE.Object3D();
      var geom  = new THREE.CubeGeometry(20, 20, 20);
      var mat   = new THREE.MeshPhongMaterial({ color: Colors.white });

      var numBlocs = 3 + Math.floor(Math.random() * 3);
      for( var i = 0; i < numBlocs; i++ ) {
        var m     = new THREE.Mesh(geom.clone(), mat);
        var scale = 0.1 + Math.random() * 0.9;

        m.position.x = i * 15;
        m.position.y = Math.random() * 10;
        m.position.z = Math.random() * 10;
        m.rotation.z = Math.random() * Math.PI * 2;
        m.rotation.y = Math.random() * Math.PI * 2;
        m.scale.set(scale, scale, scale);

        this.mesh.add(m);

        m.castShadow    = true;
        m.receiveShadow = true;
      }
    }

    // Function to rotate clouds
    Cloud.prototype.rotate = function(){
      var len = this.mesh.children.length;
      for( var i = 0; i < len; i++ ) {
        var m = this.mesh.children[i];
        m.rotation.z += Math.random() * 0.005 * (i + 1);
        m.rotation.y += Math.random() * 0.002 * (i + 1);
      }
    }

    // Define Sky (Adding clouds, particles)
    var Sky = function() {
      this.mesh = new THREE.Object3D();

      this.numClouds  = options.numClouds;
      this.clouds     = [];
      var stepAngle   = Math.PI * 2 / this.numClouds;

      // Add all clouds to sky
      for( var i = 0; i < this.numClouds; i++ ) {
        var newCloud  = new Cloud();
        this.clouds.push(newCloud);
        var angle     = stepAngle * i;
        var height    = worldOpt.radius + 100 + Math.random() * 300;
        var scale     = 1 + Math.random() * 2;
        newCloud.mesh.position.y = Math.sin(angle) * height;
        newCloud.mesh.position.x = Math.cos(angle) * height;
        newCloud.mesh.position.z = 0 - Math.random() * 300;
        newCloud.mesh.rotation.z = angle + Math.PI / 2;
        newCloud.mesh.scale.set(scale, scale, scale);
        this.mesh.add(newCloud.mesh);
      }
    }

    // Function to move clouds in the sky
    Sky.prototype.moveClouds = function() {
      for( var i = 0; i < this.numClouds; i++ ) {
        var cloud = this.clouds[i];
        cloud.rotate();
      }
      this.mesh.rotation.z += options.cloudSpeed * deltaTime;
    }

    //****** 3D INITIALIZATION FUNCTIONS

    var world, sky;

    function createWorld(){
      world = new World();
      world.mesh.position.y = -worldOpt.radius;
      scene.add(world.mesh);
    }

    function createSky(){
      sky = new Sky();
      sky.mesh.position.y = -worldOpt.radius;
      scene.add(sky.mesh);
    }

    //****** LOOPS

    function loop() {

      // Get "Delta Time"
      newTime   = new Date().getTime();
      deltaTime = newTime - oldTime;
      oldTime   = newTime;

      // Rotate World
      world.mesh.rotation.z += options.speed * deltaTime;
      if ( world.mesh.rotation.z > 2*Math.PI) world.mesh.rotation.z -= 2 * Math.PI;

      sky.moveClouds();
      world.moveGround();

      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }

    // Initialize all 3D objects
    createScene();
    createLights();
    createWorld();
    createSky();

    window.addEventListener('resize', handleWindowResize, false);

    this.requestID = window.requestAnimationFrame(loop);
    // Start the loop
    loop();
  }

  componentWillUnmount() {
    console.log("3D Canvas Unmounted!");
    window.removeEventListener('resize', this.componentDidMount.handleWindowResize)
    window.cancelAnimationFrame(this.requestID);
  }

  render() {
    return(
      <div id="canvas" style={{...style, visibility: this.props.show ? "visible" : "hidden"}}></div>
    );
  }
}

export default ThreeBackground
