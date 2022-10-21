const txtUsername=document.getElementById("name")! as HTMLInputElement;
const txtPassword=document.getElementById("password")! as HTMLInputElement;

const btnSubmit=document.querySelector("button");
btnSubmit?.addEventListener("click",displayRole);

enum Roles{ADMIN=1,EMPLOYEE=2}

let admin={
    name:"admin",
    password:"1234",
    role:Roles.ADMIN,
}
let employee={
    name:"employee",
    password:"5678",
    role:Roles.EMPLOYEE,
}
let users=[admin,employee]

function displayRole(this: HTMLElement){

    var txtuser = txtUsername.value

    var password = txtPassword.value

    // console.log(txtuser)

    for (let i in users) {

        if (users[i].name === txtuser) {

            if (users[i].role === Roles.ADMIN) {
                console.log("admin")
                window.location.href="http://127.0.0.1:5500/html/requestform.html";
                break;
            }

            else{
                console.log("employee")
                window.location.href="http://127.0.0.1:5500/html/requestform.html";
                break;
            }
            
        }

    }

}