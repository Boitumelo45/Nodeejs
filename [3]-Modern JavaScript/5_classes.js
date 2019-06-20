


class Person{

  constructor(name){
    this.name = name
  }
  greet(){
    console.log(`Hello ${this.name}`);
  }

}

let p = new Person('John')
p.greet()

class Student extends Person{
  constructor(name, level){
    super(name) //this.name = name 
    this.level = level
  }
  greet(){
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

let s = new Student('John', 3)
s.greet()
