let users = []

function getData() {
    return fetch('http://localhost:5065/users', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.legth !== 0) {
            users.push(data)
        } else {
            console.log('xato');
        }
    });
}

getData()

    console.log(users);