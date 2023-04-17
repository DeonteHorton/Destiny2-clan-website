const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const PORT = process.env.REACT_APP_DB_PORT;

const url = process.env.REACT_APP_URL

 app.listen(PORT,()=>{
    console.log(`Server at ${url}:${PORT}`);
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//All routes

app.get('/api',(req,res)=>{
    res.json({
    "All people": `${url}/api/accounts`,
    "Collect Members data": `${url}/api/accounts/members_data`,
    "Search for account": `${url}/api/accounts/search_account/username&password`,
    "Find by User Name": `${url}/api/accounts/username/username`,
    "Find by First name":  `${url}/api/accounts/by_fname/fname`,
    "Find by Last name":  `${url}/api/accounts/by_lname/lname`,
    "Find by age": `${url}/api/accounts/by_age/age`,
    "Find by email": `${url}/api/accounts/email/email`,
    "Find by guardian": `${url}/api/accounts/guardian/guardian`,
    "Find by classtype": `${url}/api/accounts/class/class_id`,
    "Get all contacts": `${url}/api/contacts`,
    "Find by Name": `${url}/api/contacts/name/name`,
    "Find by email": `${url}/api/contacts/email/email`,
    "Find user comment": `${url}/api/contacts/user_comment/name`,
    "Find by id": `${url}/api/contacts/by_id/id`,
    })
});
app.post('/post',(req,res)=>{
    console.log(req.body);
    res.json(req.body)
})

app.use('/api',router)
