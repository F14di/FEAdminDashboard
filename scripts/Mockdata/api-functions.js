

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

const validateUserLogin= async ()=>(username, password){
	// loginResponse stores admin details in case of success. 
	//userValidated = false in case of wrong input
	const loginResponse= await fetch('www.emp-amdocs.com/{username}/{password}')
								.then(res=>res.json())

	return loginResponse;
}

const getUserList = async () => {
	const userList = await fetch('www.emp-amdocs.com/admin/users')
							.then(res=>res.json())
	return userList;
}

const getDepartments = async ()=>{
	const amdocsDepartments = await fetch('www.emp-amdocs.com/admin/departments')
							.then(res=>res.json())
	return amdocsDepartments;
}

// const getCountries = async()=>{
// 	const amdocsCountries = await fetch('www.emp-amdocs.com/admin/amdocsCountries')
// 							.then(res=>res.json())
// 	return amdocsCountries;
// }

// const getWorkSites = async()=>{
// 	const amdocsWorkSites = await fetch('www.emp-amdocs.com/admin/amdocs_work_sites')
// 							.then(res=>res.json())
// 	return amdocsWorkSites;
// }

// const getRoles = async()=>{
// 	const amdocsRoles = await fetch('www.emp-amdocs.com/admin/roles')
// 							.then(res=>res.json())
// 	return amdocsRoles;
// }

<<<<<<< HEAD:api-functions.js
// const initAdvancedSearch= async()=>{
=======
// async function initAdvancedSearch=()=>{
>>>>>>> origin/master:scripts/Mockdata/api-functions.js
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