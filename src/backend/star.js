class Star {
    constructor(mass, radius, st) {
        this.id = Math.random().toString(36).substr(2, 9);

        this.spectral_type = st;
        this.mass = mass;
        this.radius = radius;

        this.circuference = this.radius;
        this.area = Math.pow(this.radius, 2);
        this.volume = Math.pow(this.radius, 3);
        this.density = this.mass / this.rel_volume;

        this.luminosity = Math.pow(this.rel_mass, 3.5);
        this.life = this.rel_mass / this.luminosity;

        this.temperature = Math.pow(this.luminosity / this.rel_area, 0.25);
        this.abs_temperature = this.rel_temperature * 5778;

        this.habtable_inner = Math.sqrt(this.luminosity / 1.1);
        this.habtable_outer = Math.sqrt(this.luminosity / 0.53);

        this.calc_color();
    }

    calc_color() {
        switch(this.spectral_type) {
            case 'O':
                this.color = '#9bb0ff'; break;

            case 'B':
                this.color = '#aabfff'; break;

            case 'A':
                this.color = '#cad7ff'; break;

            case 'F':
                this.color = '#f8f7ff'; break;

            case 'G':
                this.color = '#fff4ea'; break;

            case 'K':
                this.color = '#ffd2a1'; break;

            case 'M':
                this.color = '#ffcc6f'; break;
        }
    }
}

export default Star;
