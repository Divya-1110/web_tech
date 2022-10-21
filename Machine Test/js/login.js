"use strict";
const txtUsername = document.getElementById("name");
const txtPassword = document.getElementById("password");
const btnSubmit = document.querySelector("button");
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener("click", displayRole);
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["EMPLOYEE"] = 2] = "EMPLOYEE";
})(Roles || (Roles = {}));
let admin = {
    name: "admin",
    password: "1234",
    role: Roles.ADMIN,
};
let employee = {
    name: "employee",
    password: "5678",
    role: Roles.EMPLOYEE,
};
let users = [admin, employee];
function displayRole() {
    var txtuser = txtUsername.value;
    var password = txtPassword.value;
    // console.log(txtuser)
    for (let i in users) {
        if (users[i].name === txtuser) {
            if (users[i].role === Roles.ADMIN) {
                console.log("admin");
                window.location.href = "http://127.0.0.1:5500/html/requestform.html";
                break;
            }
            else {
                console.log("employee");
                window.location.href = "http://127.0.0.1:5500/html/requestform.html";
                break;
            }
        }
    }
}
