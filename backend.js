const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.get("/",function(req,res){
    const principal =parseInt(req.query.principal);
    const rateOfReturn = parseInt(req.query.rateOfReturn);
    const time = parseInt(req.query.time);
    const result = (principal*rateOfReturn*time)/100;
    
    res.send(result.toString())
});

app.listen(3000);