class Student{

    stuId: number=0;
    stuName: string="";
    stuAge:number=0;
    stuStandard:number=0;
    stuRollNo:number=0;
    stuAddress:string="";
    stuContact:number=0;

constructor(id:number,name:string,age:number,standard:number,rollno:number,address:string,contact:number){
    this.stuId=id;
    this.stuName=name;
    this.stuAge=age;
    this.stuStandard=standard;
    this.stuRollNo=rollno;
    this.stuAddress=address;
    this.stuContact=contact;
}
}


let student1=new Student(1,'divya',18,12,1,'kollam',123465789);
let student2=new Student(2,'sam',18,12,1,'kollam',7890654321);
let student3=new Student(3,'ram',18,12,1,'kollam',8907654321);
let student4=new Student(4,'can',18,12,1,'kollam',9087654321);
let student5=new Student(5,'jan',18,12,1,'kollam',6123457890);

let students=[student1,student2,student3,student4,student5];

let iterations=5;
for(iterations=0;iterations<5;iterations++)
{
let id= Number(prompt("Enter the studentId",''));
if(id !== null){
    students[iterations].stuId=id;
}

let sname=prompt("Enter the studentName",'');
if(sname !== null){
    students[iterations].stuName=sname;
}
let age= Number(prompt("Enter the studentAge",''));
if(age !== null){
    students[iterations].stuAge=age;
}
let standard= Number(prompt("Enter the standard",''));
if(standard !== null){
    students[iterations].stuStandard=standard;
}
let rollno= Number(prompt("Enter the student Rollno",''));
if(rollno !== null){
    students[iterations].stuRollNo=rollno;
}

let addres=prompt("Enter the student Address",'');
if(addres !== null){
    students[iterations].stuAddress=addres;
}
let phnno= Number(prompt("Enter the Phone num",''));
if(id !== null){
    students[iterations].stuId=phnno;
}

}
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
