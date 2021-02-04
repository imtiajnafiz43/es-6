class Parent {
    constructor() {
        this.FatherName = "Ahmed"
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.Name = name;
    }
    getFulName() {
        return this.Name + " " + this.FatherName;
    }
}
const baby = new Child('arif');
const baby2 = new Child('sabbir');
console.log(baby.getFulName(), baby2.getFulName());
