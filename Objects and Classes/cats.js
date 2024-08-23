function cats(catsAsStr){
    class Cat {
        name;
        age;

        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow (){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    //let cat = new Cat
    //console.log(meow);
    let cats = [];

    for (let catAsStr of catsAsStr){
        let tokens = catAsStr.split(' ');
        let name = tokens[0];
        let age = Number(tokens[1]);

        let cat = new Cat(name, age);
        //cat.meow();

        cats.push(cat);
    }

    for (let cat of cats){
        cat.meow();
    }

}

cats(['Mellow 2', 'Tom 5'])