const express = require('express');
const app = express();
const jwtPassword = "123456"; // Changed variable name for clarity
const jwt = require("jsonwebtoken");
app.use(express.json());

const ALL_USERS = [
    {
        username: "shubham01@gmail.com",
        password: "123",
        name: "sam"
    },
    {
        username: "shubham02@gmail.com",
        password: "12345",
        name: "radhey"
    },
    {
        username: "shubham03@gmail.com",
        password: "1234567",
        name: "ram"
    }
];

function userExists(username, password) {
    
    var userExists=false;
    for(let i=0;i<ALL_USERS.length;i++) {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            userExists=true;
            break;
        }
    }
    return userExists;
}

app.post('/signin', function(req, res) {
    const { username, password } = req.body;

    if (!userExists(username, password)) {
        return res.status(403).send({ "msg": "Username or password wrong" });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.status(200).json({ token });
});

app.get('/users', function(req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // Here you can use the decoded username to fetch user-specific data or perform actions
        // For now, let's just return the username
        return res.status(200).json({ username });
    } catch (err) {
        return res.status(403).send({ "msg": "Invalid token" });
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
