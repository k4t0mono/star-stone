class Star {
    constructor(mass) {
        // this.id = Math.random().toString(36).substr(2, 9);
        this.mass = mass;

        if(mass > 1)
            this.radius = Math.pow(mass, 0.5);
        else
            this.radius = Math.pow(mass, 0.8);

        this.circuference = this.radius;
        this.area = Math.pow(this.radius, 2);
        this.volume = Math.pow(this.radius, 3);
        this.density = this.mass / this.volume;

        this.luminosity = Math.pow(this.mass, 3.5);
        this.life = this.mass / this.luminosity;

        this.temperature = Math.pow(this.luminosity / this.area, 0.25);
        this.abs_temperature = this.temperature * 5778;

        this.habtable_inner = Math.sqrt(this.luminosity / 1.1);
        this.habtable_outer = Math.sqrt(this.luminosity / 0.53);

        this.calcType();
        this.calcColor();

        console.log(this.color);
    }

    calcType() {
        if(this.mass >= 16 && this.mass < 50)
            this.type = 'O'

        else if(this.mass >= 2.1 && this.mass < 16)
            this.type = 'B'

        else if(this.mass >= 1.4 && this.mass < 2.1)
            this.type = 'A'

        else if(this.mass >= 1.04 && this.mass < 1.4)
            this.type = 'F'

        else if(this.mass >= 0.8 && this.mass < 1.04)
            this.type = 'G'

        else if(this.mass >= 0.45 && this.mass < 0.8)
            this.type = 'K'

        else if(this.mass >= 0.08 && this.mass < 0.45)
            this.type = 'M'
    }

    calcColor() {
        switch(this.type) {
            case 'O':
                this.color = '9bb0ff'; break;

            case 'B':
                this.color = 'aabfff'; break;

            case 'A':
                this.color = 'cad7ff'; break;

            case 'F':
                this.color = 'f8f7ff'; break;

            case 'G':
                this.color = 'fff4ea'; break;

            case 'K':
                this.color = 'ffd2a1'; break;

            case 'M':
                this.color = 'ffcc6f'; break;
        }
    }
}

export default Star;
