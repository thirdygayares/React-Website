const Mango = {
    color: 'Yellow',
    price: 12,
    weight: 120,
    about: function(){
        // return 'This mango price is ' + this.price +' USD';
        return `This mango price is ${this.price} USD `
    }

}

console.log(Mango.about());