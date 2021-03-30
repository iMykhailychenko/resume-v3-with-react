import React, { Component, createRef, ReactElement } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import MODEL_PATH from '../../../../assets/soldier.glb';
import { Theme } from '../../../../types';
import css from './Canvas.module.css';

interface IProps {
    theme: Theme;
}

export default class Canvas extends Component<IProps> {
    canvasRef = createRef<HTMLDivElement>();
    preloaderRef = createRef<HTMLParagraphElement>();
    handleKeydown: ((event: KeyboardEvent) => void) | null = null;

    // variables
    camera?: THREE.PerspectiveCamera | null;
    clock?: THREE.Clock | null;
    scene?: THREE.Scene | null;
    hemiLight?: THREE.HemisphereLight | null;
    dirLight?: THREE.DirectionalLight | null;
    renderer?: THREE.WebGLRenderer | null;
    mesh?: THREE.Mesh | null;
    controls?: OrbitControls | null;
    loader?: GLTFLoader | null;
    animate?: (() => void) | null;

    run = (): void => {
        // GENERAL OPERATORS
        const width = window.innerWidth;
        const height = window.innerHeight;
        const container = this.canvasRef.current;
        const preloader = this.preloaderRef.current;
        const light = this.props.theme === 'light';

        // if null
        if (!container || !preloader) return;

        // THREE JS INIT
        this.camera = new THREE.PerspectiveCamera(20, width / height, 1, 1000);
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(light ? 0x909090 : 0x222222);
        this.scene.position.y = -1;
        this.scene.fog = new THREE.Fog(light ? 0x909090 : 0x222222, 1, 60);

        this.hemiLight = new THREE.HemisphereLight(light ? 0x909090 : 0x222222, light ? 0x909090 : 0x222222);
        this.hemiLight.position.set(0, 10, 0);
        this.scene.add(this.hemiLight);

        this.dirLight = new THREE.DirectionalLight(0xffffff);
        this.dirLight.position.set(4, 6, -8);
        this.dirLight.castShadow = true;
        this.dirLight.shadow.camera.top = 2;
        this.dirLight.shadow.camera.bottom = -2;
        this.dirLight.shadow.camera.left = -2;
        this.dirLight.shadow.camera.right = 2;
        this.dirLight.shadow.camera.near = 0.1;
        this.dirLight.shadow.camera.far = 40;
        this.scene.add(this.dirLight);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        container.appendChild(this.renderer.domElement);

        this.mesh = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(100, 100),
            new THREE.MeshPhongMaterial({ color: 0x909090, depthWrite: false }),
        );
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.receiveShadow = true;
        this.scene.add(this.mesh);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.maxPolarAngle = 1.45;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 55;
        this.controls.screenSpacePanning = true;

        this.camera.position.set(8, 10, 14);
        this.controls.update();

        this.loader = new GLTFLoader();

        this.loader.load(MODEL_PATH, gltf => {
            const model = gltf.scene;
            if (!this.scene) return;
            this.scene.add(model);

            model.traverse((object: THREE.Object3D): void => {
                if ((object as THREE.Mesh).isMesh) object.castShadow = true;
            });

            const skeleton = new THREE.SkeletonHelper(model);
            skeleton.visible = false;
            this.scene.add(skeleton);

            const animations = gltf.animations;

            const mixer = new THREE.AnimationMixer(model);

            const idleAction = mixer.clipAction(animations[0]);
            const walkAction = mixer.clipAction(animations[3]);
            const runAction = mixer.clipAction(animations[1]);

            const setWeight = (action: THREE.AnimationAction, weight: number): void => {
                action.enabled = true;
                action.setEffectiveTimeScale(1);
                action.setEffectiveWeight(weight);
            };

            preloader.style.display = 'none';
            walkAction.play();

            this.animate = () => {
                if (!this.animate) return;
                requestAnimationFrame(this.animate as FrameRequestCallback);

                const idleWeight = idleAction.getEffectiveWeight();
                const walkWeight = walkAction.getEffectiveWeight();
                const runWeight = runAction.getEffectiveWeight();

                setWeight(idleAction, idleWeight);
                setWeight(walkAction, walkWeight);
                setWeight(runAction, runWeight);
                if (!this.renderer || !this.scene || !this.clock || !this.camera) return;

                this.renderer.render(this.scene, this.camera);

                const mixerUpdateDelta = this.clock.getDelta();
                mixer.update(mixerUpdateDelta);
            };

            this.animate();

            window.onresize = () => {
                if (!this.renderer || !this.camera) return;
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();

                this.renderer.setSize(window.innerWidth, window.innerHeight);
            };

            let animCount = 0;
            this.handleKeydown = (event: KeyboardEvent) => {
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
            };

            window.addEventListener('keydown', this.handleKeydown);
        });
    };

    clear = (): void => {
        this.camera = null;
        this.clock = null;
        this.scene = null;
        this.hemiLight = null;
        this.dirLight = null;
        this.renderer = null;
        this.mesh = null;
        this.controls = null;
        this.loader = null;
        this.animate = null;

        if (this.handleKeydown) {
            window.removeEventListener('keydown', this.handleKeydown);
        }
    };

    componentDidMount(): void {
        this.run();
    }

    componentWillUnmount(): void {
        this.clear();
    }

    componentDidUpdate(): void {
        if (!this.scene) return;

        switch (this.props.theme) {
            case 'dark':
                this.scene.background = new THREE.Color(0x222222);
                this.scene.fog = new THREE.Fog(0x222222, 1, 60);
                this.hemiLight = new THREE.HemisphereLight(0x222222, 0x222222);
                break;
            case 'light':
                this.scene.background = new THREE.Color(0x909090);
                this.scene.fog = new THREE.Fog(0x909090, 1, 60);
                this.hemiLight = new THREE.HemisphereLight(0x909090, 0x222222);
                break;
            default:
                return;
        }
    }

    render(): ReactElement {
        return (
            <div className={css.canvas} ref={this.canvasRef}>
                <p className={css.preloader} ref={this.preloaderRef}>
                    ... Loading
                </p>
            </div>
        );
    }
}
