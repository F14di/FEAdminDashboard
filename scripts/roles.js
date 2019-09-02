
function toggleNav() {
    document.getElementById("sideNavBar").classList.toggle('widthToggle');
    document.getElementById("main").classList.toggle('marginToggle');
    document.querySelectorAll(".navbar__path").forEach(el=>el.classList.toggle('hamburgerPath'));
    document.querySelectorAll(".nav__ul li a p").forEach(el=>el.classList.toggle('hideContent'));
}

const tbody = document.querySelector('#tbody');

for(const role in ROLES){
    const empID = ROLES[role].id,
      empName = ROLES[role].name;

    tbody.innerHTML += `<tr><td>${empID}</td><td>${empName}</td><td>${`Role Description`}</td><td>${'Permission Description'}</td><td>Assign No.</td></tr>`;
    
}
