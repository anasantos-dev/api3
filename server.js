const express = require("express");   
const router = express.Router();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const foods = []

const getfoods = router.get('/foods',(req, res)=>{
 res.status(200).json(foods)

})

const createfoods= router.post('/foods/creat',(req, res)=>{
    const food = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
    }

    foods.push(food);
    
    res.status(201).json({ message: `food ${food.title} criado com sucesso!` })
})


app.use(createfoods)
app.use(getfoods)

app.listen(3333, console.log("Servidor rodando com sucesso"));


    
   



