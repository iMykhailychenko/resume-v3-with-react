import React, { Component, createRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import MODEL_PATH from './soldier.glb';

import styles from './Canvas.module.css';

export default class Canvas extends Component {
  canvasRef = createRef();
  preloaderRef = createRef();

  componentDidMount() {
    // GENERAL OPERATORS
    const width = window.innerWidth;
    const height = window.innerHeight;
    const container = this.canvasRef.current;
    const preloader = this.preloaderRef.current;

    // THREE JS INIT
    const camera = new THREE.PerspectiveCamera(20, width / height, 1, 1000);
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x909090);
    scene.fog = new THREE.Fog(0x909090, 1, 60);

    const hemiLight = new THREE.HemisphereLight(0x909090, 0xe0e0e0);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(4, 6, -8);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 2;
    dirLight.shadow.camera.bottom = -2;
    dirLight.shadow.camera.left = -2;
    dirLight.shadow.camera.right = 2;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    scene.add(dirLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(100, 100),
      new THREE.MeshPhongMaterial({ color: 0x909090, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = 1.4;
    controls.minDistance = 5;
    controls.maxDistance = 40;
    controls.screenSpacePanning = true;

    camera.position.set(5, 2, 18);
    controls.update();

    const loader = new GLTFLoader();

    loader.load(MODEL_PATH, gltf => {
      const model = gltf.scene;
      scene.add(model);

      model.traverse(object => {
        if (object.isMesh) object.castShadow = true;
      });

      const skeleton = new THREE.SkeletonHelper(model);
      skeleton.visible = false;
      scene.add(skeleton);

      const animations = gltf.animations;

      const mixer = new THREE.AnimationMixer(model);

      const idleAction = mixer.clipAction(animations[0]);
      const walkAction = mixer.clipAction(animations[3]);
      const runAction = mixer.clipAction(animations[1]);

      const setWeight = (action, weight) => {
        action.enabled = true;
        action.setEffectiveTimeScale(1);
        action.setEffectiveWeight(weight);
      };

      preloader.style.display = 'none';
      walkAction.play();

      const animate = () => {
        requestAnimationFrame(animate);

        const idleWeight = idleAction.getEffectiveWeight();
        const walkWeight = walkAction.getEffectiveWeight();
        const runWeight = runAction.getEffectiveWeight();

        setWeight(idleAction, idleWeight);
        setWeight(walkAction, walkWeight);
        setWeight(runAction, runWeight);

        renderer.render(scene, camera);

        const mixerUpdateDelta = clock.getDelta();
        mixer.update(mixerUpdateDelta);
      };

      animate();

      let animCount = 0;
      window.addEventListener('keydown', event => {
        if (event.code !== 'Space') return;

        animCount += 1;

        if (animCount === 1) {
          runAction.play();
          walkAction.stop();
          return;
        }

        if (animCount === 2) {
          idleAction.play();
          runAction.stop();
          return;
        }

        if (animCount === 3) {
          walkAction.play();
          idleAction.stop();

          animCount = 0;
          return;
        }
      });
    });
  }

  render() {
    return (
      <div className={styles.canvas} ref={this.canvasRef}>
        <div className={styles.preloader} ref={this.preloaderRef}></div>
      </div>
    );
  }
}
