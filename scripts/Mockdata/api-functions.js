

const dataURL={
	employees:'employees',
	departments:'departments',
	countries:'countries',
	workSites:'work_sites',
	roles:'roles'
}

// async function getData=(url,id)=>{
// 	if (id){
// 		return await fetch(`www.emp-amdocs.com/${dataURL[url]}/${id}`)
// 					.then(res=>res.json())
// 	}
// 	return await fetch(`www.emp-amdocs.com/${dataURL[url]}`)
// 					.then(res=>res.json())
// }

// async function validateUserLogin(username, password){
// 	// loginResponse stores admin details in case of success. 
// 	//userValidated = false in case of wrong input
// 	const loginResponse= await fetch('www.emp-amdocs.com/{username}/{password}')
// 								.then(res=>res.json())

// 	return loginResponse;
// }

// async function getUserList = ()=>{
// 	const userList = await fetch('www.emp-amdocs.com/admin/users')
// 							.then(res=>res.json())
// 	return userList;
// }

// async function getDepartments =()=>{
// 	const amdocsDepartments = await fetch('www.emp-amdocs.com/admin/departments')
// 							.then(res=>res.json())
// 	return amdocsDepartments;
// }

// async function getCountries =()=>{
// 	const amdocsCountries = await fetch('www.emp-amdocs.com/admin/amdocsCountries')
// 							.then(res=>res.json())
// 	return amdocsCountries;
// }
// async function getWorkSites =()=>{
// 	const amdocsWorkSites = await fetch('www.emp-amdocs.com/admin/amdocs_work_sites')
// 							.then(res=>res.json())
// 	return amdocsWorkSites;
// }

// async function getRoles =()=>{
// 	const amdocsRoles = await fetch('www.emp-amdocs.com/admin/roles')
// 							.then(res=>res.json())
// 	return amdocsRoles;
// }

// async function initAdvancedSearch=()=>{
// 	return fetchAll(
// 		const departments = await getDepartments();
// 		const countries = await getCountries();
// 		const workSites = await getWorkSites();
// 		const roles = await getRoles();
// 		)
// }


//TODO
//init group all users by department, country, roles, work site
function groupEmployees(){
	const groupedUsers={};

	getUserList()
		.then(res=>{
			res.forEach(user=>{
				if(groupedUsers.groupedBy===user.worksite){
					groupedUsers[user.worksite].employees++;
				}else{
				groupedUsers[user.worksite]={}
				groupedUsers[user.worksite].employees=1;
				}
			})
		})
}