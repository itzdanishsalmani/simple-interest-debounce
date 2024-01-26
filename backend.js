const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.get("/",function(req,res){
    const principal =parseInt(req.query.principal);
    const rateOfInterest = parseInt(req.query.rateOfInterest);
    const time = parseInt(req.query.time);
    const result = (principal*rateOfInterest*time)/100;
    
    res.send(result.toString())
});

app.listen(3000);