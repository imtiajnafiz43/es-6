class Student {
    constructor(sId, sName) {
        this.Id = sId;
        this.Name = sName;
        this.School = 'KIN School'

    }
}
const student1 = new Student(12, 'arif');
const student2 = new Student(11, 'sabbir');
console.log(student1, student2)
