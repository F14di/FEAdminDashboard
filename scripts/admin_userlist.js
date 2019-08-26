// Material Select
/*$('.mdb-select').materialSelect({
});
*/
const tbody = document.querySelector('#tbody');

for(const user in USERS){
    const empID = USERS[user].employeeNumber,
      empName = USERS[user].firstName.concat(' ', USERS[user].lastName),
      empRole = USERS[user].roles,
      empDep = USERS[user].department,
      empWorkSite = USERS[user].workSite;

    tbody.innerHTML += `<tr><td>${empID}</td><td>${empName}</td>
                    <td>${empRole}</td><td>${empDep}</td><td>${empWorkSite}</td></tr>`;
}

