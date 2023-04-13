const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const PORT = process.env.REACT_APP_BACKEND_PORT;

const url = process.env.REACT_APP_URL

 app.listen(PORT,()=>{
    console.log(`Server at ${url}:${PORT}`);
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//All routes

app.get('/',(req,res)=>{
    res.json({
    "All people":`${url}:${PORT}/api/accounts`,
    "Collect Members data":`${url}:${PORT}/api/accounts/members_data`,
    "Search for account":`${url}:${PORT}/api/accounts/search_account/username&password`,
    "Find by User Name":`${url}:${PORT}/api/accounts/username/username`,
    "Find by First name": `${url}:${PORT}/api/accounts/by_fname/fname`,
    "Find by Last name": `${url}:${PORT}/api/accounts/by_lname/lname`,
    "Find by age":`${url}:${PORT}/api/accounts/by_age/age`,
    "Find by email":`${url}:${PORT}/api/accounts/email/email`,
    "Find by guardian":`${url}:${PORT}/api/accounts/guardian/guardian`,
    "Find by classtype":`${url}:${PORT}/api/accounts/class/class_id`,
    "Get all contacts":`${url}:${PORT}/api/contacts`,
    "Find by Name":`${url}:${PORT}/api/contacts/name/name`,
    "Find by email":`${url}:${PORT}/api/contacts/email/email`,
    "Find user comment":`${url}:${PORT}/api/contacts/user_comment/name`,
    "Find by id":`${url}:${PORT}/api/contacts/by_id/id`,
    })
});
app.post('/post',(req,res)=>{
    console.log(req.body);
    res.json(req.body)
})

app.use('/api',router)
