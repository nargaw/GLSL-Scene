import * as THREE from 'three'
import Experience from '../Experience.js'
import fragment from './Shaders/fragment.glsl'
import vertex from './Shaders/vertex.glsl'

export default class Fox
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = new THREE.Clock()
        
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('TV')
        }

        // Resource
        this.resource = this.resources.items.tvModel

        this.setModel()
        
    }

    setModel()
    {
        this.model = this.resource.scene

        this.material = new THREE.ShaderMaterial({
            transparent: false,
            side: THREE.DoubleSide,
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms: {
                u_time: { type: "f", value: 1.0 },
                u_rand: { value: 0},
                u_resolution: { type: "v2", value: new THREE.Vector2() },
                u_mouse: { type: "v2", value: new THREE.Vector2() }
            } 
        })
        //this.model.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.model)
        // let measure = new THREE.Vector3()
        // let box = this.model.getSize(measure)
        // console.log(measure)
        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
                if(child.name == "defaultMaterial002"){
                    child.material = this.material
                    console.log(child)
                    this.newMesh = child
                    this.scene.add(this.newMesh)
                    this.size = new THREE.Vector3();
                    child.getWorldScale(this.size)
                    console.log(this.size)
                }
               
            }
        })
        console.log(window.innerWidth)
        console.log(this.newMesh)
        console.log(this.model)
        // this.box = new THREE.BoxGeometry(1, 1, 1)
        // this.newMesh.geometry.computeBoundingBox(this.box)
        console.log(this.newMesh.geometry.attributes)
        //this.scene.add(this.newMesh)
    }

    update()
    {
        this.elapsedTime = this.time.getElapsedTime()  
        this.deltaTime = this.elapsedTime - this.oldTime
        this.oldTime = this.elapsedTime
        this.material.uniforms.u_time.value = this.elapsedTime 
        this.material.uniforms.u_resolution.value.x = window.innerWidth
        this.material.uniforms.u_resolution.value.y = window.innerHeight
        
    }
}