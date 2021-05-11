$(function(){
    $("#btnGetUserInfo").click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            type: "GET",
            success: function(users){
                let tableData = `
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th>City</th>
                                        <th>Company</th>
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
                                                <td>${user.address.city}</td>
                                                <td>${user.company.name}</td>
                                            </tr>
                                        </tbody>
                                    ` 
                        }
                    $("#tblUserInfo").html(tableData)
            },
            error: function(error){
                console.log(error)
            }
        })
    })
})
