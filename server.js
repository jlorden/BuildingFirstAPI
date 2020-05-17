const express = require("express");
const faker=require('faker');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
    
// req is shorthand for request
// res is shorthand for response
app.get("/api/user", (req, res) => {
    res.json(users);
});

app.get("/api/companies", (req, res) => {
        res.json(companies);
    });

app.get("/api/users/companies", (req, res) => {
        res.json(users && companies);
    });

// app.post("/api/companies/new", (req, res) => {
//     // console.log("in the back-end", req.body);
//     companies.push(req.body);
//     res.json( {"status": "ok"} );
// });
// app.post("/api/users/new", (req, res) => {
//     // console.log("user being added", req.body);
//     users.push(req.body);
//     res.json( {"status": "ok"} );
// });



class User {
    constructor () {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const users = [
    new User(),
    new User(),
]

class Company {
    constructor () {
        this.name = faker.company.companyName();
        // this.address = faker.company.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const companies = [
    new Company(),
    new Company(),
]