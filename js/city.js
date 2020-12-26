// GLOBALS
let scene;
let camera;
let renderer;

// CONSTANTS
// Block Constants
const BLOCK_SIZE = 3;
const EMPTY_CENTER_ODDS = 0.8;
const GARDEN_PERCENTAGE = 0.1;
const GROUND_FLOOR_PERCENTAGE = 0.3;

// Building Constants
const BASE_BUILDING_WIDTH = 1;
const BUILDING_SPACE_BUFFER = 1.2;
const BUILDING_WIDTH_W_BUFFER = BASE_BUILDING_WIDTH * BUILDING_SPACE_BUFFER;
const BUILDING_WIDTH_VARIATION = 0.1;

// City Constants
const ROAD_WIDTH = 0.5;

function generateGround() {
    const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const ground = new THREE.Mesh(geometry, material);
    scene.add(ground);
}

function generateBuilding(centerX, centerY, height, size) {
    const geometry = new THREE.BoxGeometry(size, size, height);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const building = new THREE.Mesh(geometry, material);
    building.position.x = centerX;
    building.position.y = centerY;
    scene.add(building);
    //console.log("Generating Building at (x=" + centerX, ",y=" + centerY + ") with size=" + size + " and height=" + height);
}

function generateCityBlock(centerX, centerY) {
    // Minus 1 to offset coordinates to the center of building
    // console.log("Generating City Block (x=" + centerX + ",y=" + centerY + ")");
    if (Math.random() < GROUND_FLOOR_PERCENTAGE) {
        generateBuilding(centerX, centerY, 2, BLOCK_SIZE * BUILDING_WIDTH_W_BUFFER)
    }
    for (x = -1; x <= 1; x++) {
        for (y = -1; y <= 1; y++) {
            if (x == 0 && y == 0 && (Math.random() < EMPTY_CENTER_ODDS)) {
                break;
            } else {
                generateBuilding((centerX + (x * BUILDING_WIDTH_W_BUFFER)), (centerY + (y * BUILDING_WIDTH_W_BUFFER)), generateBuildingHeight(3, 7), generateBuildingWidth());
            }
        }
    }
}

function generateGarden(centerX, centerY) {
    const geometry = new THREE.PlaneGeometry(BUILDING_WIDTH_W_BUFFER * BLOCK_SIZE, BUILDING_WIDTH_W_BUFFER * BLOCK_SIZE);
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    const garden = new THREE.Mesh(geometry, material);
    garden.position.x = centerX;
    garden.position.y = centerY;
    garden.position.z = 0.01;
    scene.add(garden);
}

function generateCity() {
    generateGround();
    currentY = -10;
    for (row = 0; row <= 10; row++) {
        currentX = -20;
        for (col = 0; col <= 20; col++) {
            if (Math.random() < GARDEN_PERCENTAGE) {
                generateGarden(currentX, currentY);
            } else {
                generateCityBlock(currentX, currentY);
            }
            currentX += (BLOCK_SIZE * BUILDING_WIDTH_W_BUFFER);
            currentX += ROAD_WIDTH;
        }
        currentY += (BLOCK_SIZE * BUILDING_WIDTH_W_BUFFER);
        currentY += ROAD_WIDTH;
    }
}

function generateBuildingWidth() {
    return (Math.random() * (2 * BUILDING_WIDTH_VARIATION)) + BASE_BUILDING_WIDTH - BUILDING_WIDTH_VARIATION;
}

function generateBuildingHeight(min, max) {
    return (Math.random() * (max - min)) + min
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setup() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = -5;
    camera.position.z = 20;
    camera.rotation.x = 0.3;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

setup();
generateCity();
animate();