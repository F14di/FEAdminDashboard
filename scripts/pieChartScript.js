document.querySelector('.dropDown__workSite')
    .addEventListener("click",()=>reRender(workSites,usersByWorkSite))

document.querySelector('.dropDown__department')
.addEventListener("click",()=>reRender(departments,usersByDepartment))

document.querySelector('.dropDown__role')
.addEventListener("click",()=>reRender(roles,usersByRole))
