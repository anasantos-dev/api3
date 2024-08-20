

const express = require("express");   
const router = express.Router();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const users = []

const getUsers = router.get('/users',(req, res)=>{
 res.status(200).json(users)

})

const createUser = router.post('/users',(req, res)=>{
    const user = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status('true')
    }

users.push(user);


    })

app.use(createUser)
app.use(getUsers)

app.listen(3333, console.log("Servidor rodando com sucesso"));


    
   



