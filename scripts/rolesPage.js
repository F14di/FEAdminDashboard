const tbody = document.querySelector('#tbody');

console.log(tbody)

for(const role in ROLES){
    const roleID = ROLES[role].id,
      roleName = ROLES[role].name;

    tbody.innerHTML += `<tr><td>${roleID}</td><td>${roleName}</td></tr>`;
}