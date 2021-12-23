class Cat {
    color;
    gender;
    age;
    weight;
    constructor(color, gender, age, weight) {
        this.color = color;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
    }
    get color() {
        return this.color;
    }
    set color(color) {
        this.color = color;
    }
    meow() {
        alert('meow! meow! meow!')
    }
}
