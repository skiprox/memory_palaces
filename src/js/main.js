// THREE.JS MODULES
import * as THREE from 'three'

// STATS
import Stats from 'three/examples/jsm/libs/stats.module'

// GUI
import * as dat from 'dat.gui'

// CONTROLS
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// COMPONENTS
import Camera from 'Components/Camera'
import Renderer from 'Components/Renderer'
import Ray from 'Components/Ray'
import SceneAmbientLight from 'Components/SceneAmbientLight'
import SceneSpotLight from 'Components/SceneSpotLight'

// OBJECTS
import Ball from 'Objects/Ball'
import Cube from 'Objects/Cube'
import Plane from 'Objects/Mesh'

// MODELS
import StandardModel from 'Models/StandardModel'

// EFFECTS
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

import { EffectShader } from 'Shaders'


/* ------- GLOBAL VARIABLES --------*/
global.mouse = new THREE.Vector2()

/* -------- SET UP -------- */
const container = document.querySelector('#app')
global.scene = new THREE.Scene()

/* -------- CAMERA, RENDERER, RAYCASTER -------- */
global.raycaster = new Ray(container);
global.camera = new Camera()
global.renderer = new Renderer({
  antialias: true,
  alpha: true,
  clearColor: 0xfcfcfc
})

/* -------- LIGHTING -------- */
global.ambientLight = new SceneAmbientLight()
global.spotLightRed = new SceneSpotLight(0xff4422, {x: 100, y: 100, z: 100})
global.spotLightBlue = new SceneSpotLight(0x2244ff, {x: -100, y: 100, z: -100})
global.spotLightGreen = new SceneSpotLight(0x22ff44, {x: 100, y: 100, z: -100})
global.spotLightYellow = new SceneSpotLight(0xffff22, {x: -100, y: 100, z: 100})

let time = 0

/* -------- POST PROCESSING -------- */
// const composer = new EffectComposer(renderer)
// const renderPass = new RenderPass(scene, camera)
// const shaderPass = new ShaderPass(EffectShader)

/* -------- SHARED PARAMETERS -------- */
const params = {
  noiseStrength: 4.0
}

/* -------- DAT GUI OPTIONS -------- */
let gui = new dat.GUI()

gui
  .add(params, 'noiseStrength')
  .min(0)
  .max(50)
  .step(0.1)

/* -------- STATS -------- */
let stats = new Stats()

/* -------- CREATE OBJECTS -------- */
let ball = new Ball({
  size: 10,
  resolution: 50
})

let cube = new Cube({
  size: 10,
  resolution: 50
})

let mesh = new Plane({
  pos: {
    x: 70,
    y: 70,
    z: 30
  },
  texture: new THREE.TextureLoader().load('./models/textures/judgement.png')
})

/* sean. I don't know what I'm doing... I'm sorry if this messes up ur organization.  */

/* -------- CREATE MODELS -------- */
let barn = new StandardModel({
  filename: './models/barn/barn_1.gltf',
  scale: {
    x: 2.0,
    y: 2.0,
    z: 3.2
  },
  rotation: {
    x: 0,
    y: -Math.PI/2,
    z: 0
  },
  wireframe: true
})

let greenhouse = new StandardModel({
  filename: './models/greenhouse/greenhousse2.gltf',
  pos: {
    x: 100,
    y: 0,
    z: 100
  },
  scale: {
    x: 5.5,
    y: 5.5,
    z: 5.5
  },
  wireframe: false,
  userData: {
    video: 'some_url_greenhouse.com',
    description: 'Blah blah blah whatever greenhouse'
  }
})

let cowhead = new StandardModel({
  filename:'./models/cow/bakedcowpie.gltf',
  pos: {
    x:-26,
    y:20,
    z:-120

  },
  scale: {
    x: 7,
    y: 7,
    z: 7
  },
  wireframe: false,
  userData: {
    video: 'some_url_cowhead.com',
    description: 'Blah blah blah whatever cow head'
  }
})

let mootext = new StandardModel({
  filename:'./models/mootext/mootext.gltf',
  pos: {
    x: 0,
    y: 50,
    z: 0
  },
  scale: {
    x:2,
    y:2,
    z:2
  },
  wireframe: false,
  userData: {
    video: 'some_url_moo.com',
    description: 'Blah blah blah whatever moo text'
  }
})

let cooler = new StandardModel({
  filename: './models/cooler/cooler-camo.gltf',
  pos: {
    x: -80,
    y: 10,
    z: -30
  },
  scale: {
    x: 0.1,
    y: 0.1,
    z: 0.1
  },
  wireframe: false,
  userData: {
    video: 'some_url_cooler.com',
    description: 'Blah blah blah whatever cooler'
  }
})

let bear = new StandardModel({
  filename:'./models/bear/bear2.gltf',
  pos: {
    x:80,
    y:8,
    z:-60
  },
  scale: {
    x:0.4,
    y:0.4,
    z:0.4
  },
  wireframe: false,
   userData: {
    video: 'some_url_bear.com',
    description: 'Blah blah blah whatever bear'
  }
})

let brain = new StandardModel({
  filename:'./models/brain/brain_1.gltf',
  pos: {
    x:-140,
    y:5,
    z:75
  },
  scale: {
    x:0.1,
    y:0.1,
    z:0.1
  },
  wireframe: false,
   userData: {
    video: 'some_url_brain.com',
    description: 'Blah blah blah whatever brain'
  }
})

let boots = new StandardModel({
  filename:'./models/boot/boots.gltf',
  pos: {
    x:95,
    y:0,
    z:115
  },
  scale: {
    x:0.15,
    y:0.15,
    z:0.15
  },
  wireframe: false,
    userData: {
    video: 'some_url_boot.com',
    description: 'Blah blah blah whatever boots'
  }
})

let oink = new StandardModel({
  filename:'./models/oink/bignose.gltf',
  pos: {
    x:-15,
    y:0,
    z:70
  },
  scale: {
    x:0.05,
    y:0.05,
    z:0.05
  },
  wireframe: false,
    userData: {
    video: 'some_url_nose.com',
    description: 'oink oink whatever moo'
  }
})

let maze = new StandardModel({
  filename:'./models/maze/grid.gltf',
  pos: {
    x:0,
    y:0,
    z:0
  },
  scale: {
    x:0.6,
    y:0.5,
    z:0.7
  },
  wireframe: false,
    userData: {
    video: 'some_url_maze.com',
    description: 'oink oink whatever moo'
  }
})



/* -------- START -------- */
const init = () => {
  // --- add renderer to container ---
  container.appendChild(renderer.domElement)

  // --- add stats to container---
  container.appendChild(stats.dom)

  // --- add the light ---
  scene.add(ambientLight)
  scene.add(spotLightRed)
  scene.add(spotLightBlue)
  scene.add(spotLightGreen)

  // --- add objects to scene ---
  scene.add(ball)
  scene.add(cube)
  scene.add(mesh)

  // --- add camera controls to scene ---
  global.controls = new OrbitControls( global.camera, global.renderer.domElement )
  global.controls.enableZoom = true
  global.controls.enablePan = true
  global.controls.enableDamping = true
  global.controls.rotateSpeed = - 0.25

  // --- add models to scene ---
  //greenhouse.load()
  cowhead.load()
  barn.load()
  cooler.load()
  mootext.load()
  bear.load()
  maze.load()
  brain.load()
  // boots.load()
  oink.load()
}
init()

/* -------- ANIMATION LOOP -------- */
const loop = () => {
  // update uniforms for ball material
  ball.update({
    u_amp: params.noiseStrength,
    u_time: time
  })

  cube.update({
    u_amp: params.noiseStrength,
    u_time: time
  })

  mesh.update({rotate: {x: 0, y: 0.05, z: 0}})

  // --- UPDATE TIME & STATS --
  time += 0.1
  stats.update()

  // --- RENDER --
  renderer.render(scene, camera)
  // composer.render()
  requestAnimationFrame(loop)
}
loop()

/* -------- WINDOW RESIZE -------- */
window.addEventListener('resize', () => {
  let width = window.innerWidth
  let height = window.innerHeight

  // update camera projection matrix
  camera.aspect = width / height
  camera.updateProjectionMatrix()

  // update canvas dimensions
  renderer.setSize(width, height)
})
