//create a class:id,name,gender,home
class Student{
    constructor(id,name,standard,age,gender,home)
    {
     this.id=id;
     this.name=name;
     this.standard=standard;
     this.age=age;
     this.gender=gender;
     this.home=home
     }
}
class School{
    constructor(){
        this.students=[];
    }
}

//create an object of school
school=new School();

//define functions for CRUD

//addStudent
function addStudent(){
    //declare and get values from html file
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let standard=document.getElementById("standard").value;
    let age=document.getElementById('age').value;
    let gender=document.getElementById("gender").value;
    let home=document.getElementById("home").value;

    //succes or failure flag
    let flag=true;

    //process
    try
    {
        //checking isEmpty
        if(isEmpty(id) || isEmpty(name) || isEmpty(standard) || isEmpty(age) || isEmpty(gender) || isEmpty(home))
        {
            throw "Empty Filed: Please fiil all the fields";
        }

        //checking age
        if(age<0 || age>100){
            throw "Age should be between 0 and 100";
        }

        //checking isNaN--Not a NUmber
        if(isNaN(age) || isNaN(id) || isNaN(standard)){
            throw "Age,Id,Standard should be number";
        }

    }
    catch(err)
    {
        falg=false;
        alert("Error:"+err);
    }

    //success-falg=true
    if(flag){
        school.students.push(new Student(id,name.trim(),standard,age,gender.trim().toLowerCase(),home.trim()));
        console.log(school.students);
        alert("Students has been added successfully!!..")

        //clear allthe deatils
        clearStudent();
    }
    else{
        clearStudent();
    }

}

//helper function for isEmpty
 function isEmpty(inputStr)
 {
     //check condition
     if(inputStr.length == 0){
          return true;
     }
     else{
         return false;
     }
 }

 //clear controls
 function clearStudent(){
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("standard").value="";
    document.getElementById('age').value="";
    document.getElementById("gender").value="";
    document.getElementById("home").value="";
 }

 //updateStudent
 function updateStudent(){
     //declare and get values from html file
     let id=document.getElementById("id").value;
     let name=document.getElementById("name").value;
     let standard=document.getElementById("standard").value;
     let age=document.getElementById('age').value;
     let gender=document.getElementById("gender").value;
     let home=document.getElementById("home").value;
 
     //succes or failure flag
     let flag=true;
 
     //process
     try
     {
         //checking isEmpty
         if(isEmpty(id) || isEmpty(name) || isEmpty(standard) || isEmpty(age) || isEmpty(gender) || isEmpty(home))
         {
             throw "Empty Filed: Please fiil all the fields";
         }
 
         //checking age
         if(age<0 || age>100){
             throw "Age should be between 0 and 100";
         }
 
         //checking isNaN--Not a NUmber
         if(isNaN(age) || isNaN(id) || isNaN(standard)){
             throw "Age,Id,Standard should be number";
         }
 
     }
     catch(err)
     {
         falg=false;
         alert("Error:"+err);
     }
 
     //success-falg=true
     if(flag){

        //check condition for locating existing id number
        for(let i=0;i<school.students.length;i++){
            if(school.students[i].id== id){
                if(!isEmpty(name)) school.students[i].name=name;
                if(!isEmpty(name)) school.students[i].standard=standard;
                if(!isEmpty(name)) school.students[i].age=age;
                if(!isEmpty(name)) school.students[i].gender=gender;
                if(!isEmpty(name)) school.students[i].home=home;
            }
        }
         console.log(school.students);
         alert("Students has been updated successfully!!..")
 
         //clear allthe deatils
         clearStudent();
     }
     else{
         clearStudent();
     }
 

 }