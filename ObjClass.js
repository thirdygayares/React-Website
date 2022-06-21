class Fruit {
    
    constructor(name) {
        this.name = name;
    }

    fol(){
        console.log(this.name + ' is too much tasty');
    }

    static jackfruit(){
        console.log('jackfruit is very popular');
    }

}

let add = new Fruit('Mango');

add.fol();

Fruit.jackfruit();
