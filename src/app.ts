/**
 * Interface (tính trừu tượng)
 */

interface IAnimal {
  name: string;
  age: number;
  greeting(): void;
}

const dog: IAnimal = {
  name: 'Dog',
  age: 2,
  greeting() {
    console.log('Gâu gâu');
  },
};

/**
 * Class
 */

class Animal implements IAnimal {
    name: string;
    age: number;
    text: string;

    constructor(name: string, age: number, text: string) {
        this.name = name;
        this.age = age;
        this.text = text;
    }

    greeting() {
        console.log(this.text);
    }
}
