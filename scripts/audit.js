function init(){
    //get the data from the api
    const auditData = api.getUsersAudit();

    //grab the table tbody using document.querySelector
    const table = document.querySelector('#audit-table tbody');

    //iterate over auditData and add new <tr> with the data
    //for each audit:
    for(const audit of auditData){
        table.innerHTML += `<tr>
            <th>${audit.date}</th>
            <td>${audit.time}</td>
            <td>${audit.user}</td>
            <td>${audit.activity}</td>
        </tr>`        
    }
}

init();