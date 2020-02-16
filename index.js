function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log("json", object)
            document.body.innerHTML = object.id
        })
        .catch(function (error) {
            alert("Unauthorized Access")
            console.log(error.message)
            document.body.innerHTML = error
    })
}

submitData("Steve", "steve@steve.com")