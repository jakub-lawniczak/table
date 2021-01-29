const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

const colorOrange = new THREE.Color('orange');
const colorYellow = new THREE.Color('yellow');
const colorWhite = new THREE.Color('white');

const tableTopGemoetry = new THREE.BoxGeometry(15,25,.5);
const tableLegGemoetry = new THREE.BoxGeometry(5,1,1);
const loader = new THREE.TextureLoader();


const tableTopMaterial = [
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/4.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/4.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/2.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/2.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/3.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/3.jpg')}),
  ];
const tableLegMaterial = [
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('http://jakub-lawniczak.com/threejs/3/textures/8.jpg')}),
  ];


// const leg1 = createTableLeg();
// const leg2 = createTableLeg();
// const leg3 = createTableLeg();
// const leg4 = createTableLeg();

// leg1.position.set(10, 0, 0);
// leg2.sphere.position.set(5, 0, 0);
// leg3.sphere.position.set(-5, 0, 0);
// leg4.sphere.position.set(-10, 0, 0);

let tableTop = new THREE.Mesh(tableTopGemoetry, tableTopMaterial);
let tableLeg1 = new THREE.Mesh(tableLegGemoetry, tableLegMaterial);
let tableLeg2 = new THREE.Mesh(tableLegGemoetry, tableLegMaterial);
let tableLeg3 = new THREE.Mesh(tableLegGemoetry, tableLegMaterial);
let tableLeg4 = new THREE.Mesh(tableLegGemoetry, tableLegMaterial);
const light = new THREE.PointLight(colorWhite, 2);
const light2 = new THREE.PointLight(colorWhite, .5);


tableTop.position.set(0,4.5,0);
tableTop.rotation.x = 1.575;

tableLeg1.position.set(6.5, 2, 11);
tableLeg1.rotation.z = 4.7;

tableLeg2.position.set(-6.5, 2, -11);
tableLeg2.rotation.z = 4.7;

tableLeg3.position.set(6.5, 2, -11);
tableLeg3.rotation.z = 4.7;

tableLeg4.position.set(-6.5, 2, 11);
tableLeg4.rotation.z = 4.7;


light.position.set(20, -20, 40);
light2.position.set(10, 20, 40);

scene.add(light);
scene.add(light2);
scene.add(tableTop, tableLeg1, tableLeg2, tableLeg3, tableLeg4);

camera.position.set(15,15,55);

controls = new THREE.OrbitControls(camera, renderer.domElement);


renderer.render(scene, camera);

// SIMPLE ANIMATION
const animate = function () { 
    requestAnimationFrame( animate );

    // tableTop.rotation.x += 0.01;
    // tableTop.rotation.y += 0.01;
    // tableTop.rotation.z += 0.01; 
    controls.update();

    renderer.render( scene, camera );
}; 


animate();

const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', handleResize);


