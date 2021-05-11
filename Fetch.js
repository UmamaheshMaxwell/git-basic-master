function fetchUserData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {bindData(data)})
}

function bindData(users){
    let tableData = `
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead> 
            `

        for(let user of users){
            tableData += `
                        <tbody>
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td>${user.website}</td>
                            </tr>
                        </tbody>
                     ` 
        }

    document.getElementById("tblUserInfo").innerHTML = tableData
}