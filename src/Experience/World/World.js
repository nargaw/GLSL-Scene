import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import TV from './Tv.js'
import Room from './Room.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            //this.floor = new Floor()
            //this.fox = new Fox()
            this.tv = new TV()
            this.environment = new Environment()
            this.room = new Room()

        })
    }

    update()
    {
        if(this.tv)
            this.tv.update()
    }
}