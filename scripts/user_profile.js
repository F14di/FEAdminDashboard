const user_name_header=document.querySelector(".Employee__Name");
const user_firstName=document.querySelector(".input_firstName");
const user_lastName=document.querySelector(".input_lastName");
const user_workSite=document.querySelector(".input_workSite");
const user_Manager=document.querySelector(".input_manager");
const user_phone=document.querySelector(".input_phone");
const user_email=document.querySelector(".input_email");
const user_department=document.querySelector(".input_department");
const user_lastLogin=document.querySelector(".input_lastLogin");


user_firstName.value=USER.firstName;
user_lastName.value=USER.lastName;
user_workSite.value=USER.workSite;
user_Manager.value=USER.managerName;
user_phone.value=USER.phone;
user_email.value=USER.email;
user_department.value=USER.department;



const all_roles=document.querySelector(".allRoles");
const user_roles=document.querySelector(".userRoles");

const userRoles = USER.roles.map(el=>el.roleName);
userRoles.forEach(el=>{
    user_roles.innerHTML +=`<li>${el}</li>`;
})
ROLES.forEach( el=>{
    all_roles.innerHTML +=`<li>${el.name}</li>`;
})