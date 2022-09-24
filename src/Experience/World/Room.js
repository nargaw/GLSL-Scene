import Experience from "../Experience";
import * as THREE from 'three'
import { DoubleSide } from "three";

export default class Room {
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.room()
    }

    room()
    {
        this.wallMaterial = new THREE.MeshStandardMaterial({
            wireframe: false,
            side: THREE.DoubleSide
        })
        this.wallGeometry = new THREE.BoxGeometry(20, 20, 0.1)
        this.floor = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.floor.rotation.x = -Math.PI * 0.5
        this.floor.position.y = -0.625


        this.wallLeft = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.wallLeft.position.z = -10
        this.wallLeft.position.y = 9
        this.wallLeft.rotation.z = -Math.PI * 0.5

        this.wallRight = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.wallRight.position.z = 10
        this.wallRight.position.y = 9
        this.wallRight.rotation.z = -Math.PI * 0.5

        this.wallBack = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.wallBack.position.x = 10
        this.wallBack.position.y = 9
        this.wallBack.rotation.y = -Math.PI * 0.5

        this.wallFront = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.wallFront.position.x = -10
        this.wallFront.position.y = 9
        this.wallFront.rotation.y = -Math.PI * 0.5

        this.wallRoof = new THREE.Mesh(this.wallGeometry, this.wallMaterial)
        this.wallRoof.position.y = 18
        this.wallRoof.rotation.x = -Math.PI * 0.5
        

        this.scene.add(this.floor, this.wallLeft, this.wallRight, this.wallBack, this.wallFront, this.wallRoof)

    }
}