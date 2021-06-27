//1. Create 2 object and try to use call,apply and bind on them.
const student = {
    studentName: "Ananya Singh",
    getInvite(a, b) {
        console.log("student" + " : " + this.studentName);
        console.log(a * b);
    }
}

const student2 = {
    studentName: "Kanchi Singh",
}
student.getInvite.call(student2,3, 4); //call

//apply
const stud = {
    studentName: "Shiva Singh",
    getInvite: function (a, b) {
        console.log("student" + " : " + this.studentName);
        console.log(a + b);
    }
}


const stud2 = {
    studentName: "Raj Singh",
}
stud.getInvite.apply(stud2, [30, 4]);//use of apply

//bind
const teacher = {
    teacherName: "Aariz Singh",
    getInvite: function (a, b) {
        console.log(this);
        console.log(a - b);
    }
}


const teacher2 = {
    teacherName: "Aaraw Singh",
}
const data = teacher.getInvite.bind(teacher2, 6, 4);//use of bind
data();