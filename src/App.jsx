import { useEffect } from "react";
import * as THREE from "three";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

import "./App.css";
import { Color, Scene } from "three";


function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = -21;
    camera.position.y =6;
    camera.position.x = 10;
   
    const canvas = document.getElementById("protfolio");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(18.57, 43.068, 16.427);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    scene.background = new THREE.Color(0xaba5d9);

  
    const loader = new GLTFLoader();
    let obj;
    loader.load(
     '../assets/scene.gltf',
      (gltf)=>{
        obj = gltf.scene;
      obj.position.set(1,1,1);
      obj.scale.set(2,2,2);
      obj.receiveShadow = true;
        scene.add(obj);
      },
      undefined,
     (error) =>{
      console.error('cannot add scene');
     }
    )
// prpject section
// project1
const loader2 = new GLTFLoader();
let obj2;
loader2.load(
 '../assets/Billboard/scene.gltf',
  (gltf)=>{
    obj2 = gltf.scene;
  obj2.position.set(-4.5, 8.5432859913, -50);
  obj2.scale.set(0.35,0.35,0.35);
  obj2.castShadow = true;
    scene.add(obj2);
  },
  undefined,
 (error) =>{
  console.error('cannot add scene');
 }
)

// project2
const loader3 = new GLTFLoader();
let obj3;
loader3.load(
 '../assets/Billboard/scene.gltf',
  (gltf)=>{
    obj3 = gltf.scene;
  obj3.position.set(-17, 8.5432859913, -35.1234856);
  obj3.rotateY(1.5708);
  obj3.castShadow = true;
  obj3.scale.set(0.35,0.35,0.35);
    scene.add(obj3);
  },
  undefined,
 (error) =>{
  console.error('cannot add scene');
 }
)
// about banner
const loader4 = new GLTFLoader();
let obj4;
loader4.load(
 '../assets/About/scene.gltf',
  (gltf)=>{
    obj4 = gltf.scene;
  obj4.position.set(25, 1.5432859913, -30.1234856);
  obj4.rotateY(-1.5708);
  obj4.castShadow = true;
  obj4.scale.set(1,1,1);
    scene.add(obj4);
  },
  undefined,
 (error) =>{
  console.error('cannot add scene');
 }
)

// adding plane which can be act as a banner
const adminTexture = new THREE.TextureLoader().load('./assets/img/Admin-dashboard-app.jpg');
const gymTexture = new THREE.TextureLoader().load('./assets/img/gym app1.jpg');
const aboutTexture = new THREE.TextureLoader().load('./assets/img/aboutMe.jpg')


// adding the adminBanner planes which act as a banner
const adminGeo1 = new THREE.PlaneGeometry(12,6);
const adminMat1= new THREE.MeshStandardMaterial({
  map: adminTexture
})
const adminMesh = new THREE.Mesh(adminGeo1, adminMat1);
adminMesh.position.set(-4.5, 9.58237591, -45.5);
adminTexture.generateMipmaps = false;
adminTexture.minFilter = THREE.LinearFilter;
adminTexture.needsUpdate = true;
scene.add(adminMesh);

// adding gymBanner
const gymGeo1 = new THREE.PlaneGeometry(12,6);
const gymMat1 = new THREE.MeshStandardMaterial({
  map: gymTexture
}) 
const gymMesh = new THREE.Mesh(gymGeo1, gymMat1);
gymTexture.generateMipmaps = false;
gymTexture.minFilter = THREE.LinearFilter;
gymTexture.needsUpdate = true;
gymMesh.position.set(-10.7,  9.58237591, -35.1234856);
gymMesh.rotateY(1.5708);
scene.add(gymMesh);
// adding aboutMe banner
const aboutMeGeo = new THREE.PlaneGeometry(12,4);
const aboutMeMat = new THREE.MeshStandardMaterial({
  map: aboutTexture
})
const aboutMeMesh = new THREE.Mesh(aboutMeGeo, aboutMeMat);
aboutTexture.generateMipmaps = false;
// aboutTexture.minFilter = THREE.LinearFilter
aboutTexture.needsUpdate = true;
aboutMeMesh.position.set(24.5, 9.1132859913, -30.1234856);
aboutMeMesh.rotateY(-90*Math.PI/180);
scene.add(aboutMeMesh);

// adding text models
let adminObj, gymObj, aboutObj, hiObj, developerObj, projectObj,qObj, eObj, skillObj;
const adminModel = new GLTFLoader();
adminModel.load('../assets/fonts/admin/output.gltf.glb',
(gltf)=>{
  adminObj = gltf.scene;
  adminObj.position.set(-4.5, 5.58237591, -40);
  adminObj.scale.set(.02,.02,.02);
  // adminObj.rotateX(-1.5708);
  scene.add(adminObj);
},
undefined,
(err)=>{
  console.log('cannot');
})

const gymModel = new GLTFLoader();
gymModel.load('../assets/fonts/gym/gym-app.glb',
(gltf)=>{
  gymObj  = gltf.scene;
  gymObj.position.set(-9.7690876785,  7.58237591, -30.1234856);
  gymObj.scale.set(.02,.02,.02);
  gymObj.rotateX(90*Math.PI/180);
  gymObj.rotateZ(-90*Math.PI/180);
  scene.add(gymObj);
},
undefined,
(err)=>{
  console.log('cannot');
}
)

const projectModel = new GLTFLoader();
gymModel.load('../assets/fonts/project/project.glb',
(gltf)=>{
  projectObj = gltf.scene;
  projectObj.position.set(-8.7,  3.58237591, -35.1234856);
  projectObj.scale.set(.02,.02,.02);
  projectObj.rotateY(45*Math.PI/180); 
  scene.add(projectObj);
},
undefined,
(err)=>{
  console.log('cannot');
})

const aboutModel = new GLTFLoader();
gymModel.load('../assets/fonts/about/about-me.glb',
(gltf)=>{
  aboutObj = gltf.scene;
  aboutObj.position.set(23, 9.9132859913, -32.1234856);
  aboutObj.scale.set(.01,.01,.01);
  aboutObj.rotateX(1.5708);
  aboutObj.rotateZ(90*Math.PI/180);
  scene.add(aboutObj);
},
undefined,
(err)=>{
  console.log('cannot');
})
const skillModel = new GLTFLoader();
skillModel.load('../assets/fonts/about/skill.glb',
(gltf)=>{
  skillObj = gltf.scene;
  skillObj.position.set(23, 9.9132859913, -27.234856);
  skillObj.scale.set(.01,.01,.01);
  skillObj.rotateX(1.5708);
  skillObj.rotateZ(90*Math.PI/180);
  scene.add(skillObj);
},
undefined,
(err)=>{
  console.log('cannot');
})
const hiModel = new GLTFLoader();
gymModel.load('../assets/fonts/hi/hi.glb',
(gltf)=>{
  hiObj = gltf.scene;
  hiObj.position.set(9,13.5,-46.5);
  hiObj.scale.set(.03,.03,.03);
  hiObj.rotateX(1.5708);
  scene.add(hiObj);
},
undefined,
(err)=>{
  console.log('cannot');
})
const developerModel = new GLTFLoader();
gymModel.load('../assets/fonts/developer/creative.glb',
(gltf)=>{
  developerObj = gltf.scene;
  developerObj.position.set(9,12.75,-46.5);
  developerObj.scale.set(.03,.03,.03);
  developerObj.rotateX(1.5708);
  scene.add(developerObj);
},
undefined,
(err)=>{
  console.log('cannot');
})

const qModel = new GLTFLoader();
qModel.load('../assets/fonts/nav/q.glb',
(gltf)=>{
  qObj = gltf.scene;
  qObj.position.set(-3.5, 4.88237591, -40);
  qObj.scale.set(.011,.011,.011)
  qObj.rotateX(1.5708);
  scene.add(qObj);
},
undefined,
(err)=>{
  console.log('cannot');
})

const eModel = new GLTFLoader();
eModel.load('../assets/fonts/nav/e.glb',
(gltf)=>{
  eObj = gltf.scene;
  eObj.position.set(-9.7690876785,  6.88237591, -30.1234856);
  eObj.scale.set(.011,.011,.011)
  eObj.rotateX(90*Math.PI/180);
  eObj.rotateZ(-90*Math.PI/180);
  scene.add(eObj);
},
undefined,
(err)=>{
  console.log('cannot');
})
    // setting the controls
    const object = [];
    let pervTime = performance.now();
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;

    const controls = new PointerLockControls(camera, renderer.domElement);

    const blocker = document.getElementById("blocker");
    const instructions = document.getElementById("instructions");

    instructions.addEventListener("click", () => {
      controls.lock();
    });
    controls.addEventListener("lock", () => {
      instructions.style.display = "none";
      blocker.style.display = "none";
    });
    controls.addEventListener("unlock", () => {
      instructions.style.display = "";
      blocker.style.display = "block";
    });
    scene.add(controls.getObject());

    const keyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = true;
          break;

        case "ArrowLeft":
        case "KeyA":
          moveLeft = true;
          break;

        case "ArrowDown":
        case "KeyS":
          moveBackward = true;
          break;

        case "ArrowRight":
        case "KeyD":
          moveRight = true;
          break;
        default:
          break;
      }
    };
    const keyUp = (event) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = false;
          break;

        case "ArrowLeft":
        case "KeyA":
          moveLeft = false;
          break;

        case "ArrowDown":
        case "KeyS":
          moveBackward = false;
          break;

        case "ArrowRight":
        case "KeyD":
          moveRight = false;
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 81) {
        location.assign(
          "https://shopmart-admin.netlify.app/"
        );
      } else if (e.keyCode === 69) {
        location.assign(
          "https://gold-gym-exercise-app.netlify.app/"
        );
      }
    });
    document.addEventListener('resize',()=>{
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })

    const animate = () => {
      window.requestAnimationFrame(animate);

      const currentTime = performance.now();
      if (controls.isLocked === true) {
        const delta = (currentTime - pervTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward)
          velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);
      }
      pervTime = currentTime;

      renderer.render(scene, camera);
    };

    animate();
  
  }, []);

  return (
    <div>
      <canvas id="protfolio" />
      <div id="blocker">
        <div id="instructions">
          <p>Click to play</p>
          <p>
            Move: WASD
            <br />
            Look: MOUSE
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;