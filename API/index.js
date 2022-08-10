const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const PORT = 3006;

 app.listen(PORT,()=>{
    console.log(`Server at http://104.248.234.208/:${PORT}`);
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//All routes

app.get('/',(req,res)=>{
    res.json({
    "All people":"http://104.248.234.208:3006/api/accounts",
    "Collect Members data":"http://104.248.234.208:3006/api/accounts/members_data",
    "Search for account":"http://104.248.234.208:3006/api/accounts/search_account/username&password",
    "Find by User Name":"http://104.248.234.208:3006/api/accounts/username/username",
    "Find by First name": "http://104.248.234.208:3006/api/accounts/by_fname/fname",
    "Find by Last name": "http://104.248.234.208:3006/api/accounts/by_lname/lname",
    "Find by age":"http://104.248.234.208:3006/api/accounts/by_age/age",
    "Find by email":"http://104.248.234.208:3006/api/accounts/email/email",
    "Find by guardian":"http://104.248.234.208:3006/api/accounts/guardian/guardian",
    "Find by classtype":"http://104.248.234.208:3006/api/accounts/class/class_id",
    "Get all contacts":"http://104.248.234.208:3006/api/contacts",
    "Find by Name":"http://104.248.234.208:3006/api/contacts/name/name",
    "Find by email":"http://104.248.234.208:3006/api/contacts/email/email",
    "Find user comment":"http://104.248.234.208:3006/api/contacts/user_comment/name",
    "Find by id":"http://104.248.234.208:3006/api/contacts/by_id/id"
    })
});
app.post('/post',(req,res)=>{
    console.log(req.body);
    res.json(req.body)
})

app.use('/api',router)
