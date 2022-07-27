const express = require("express");
const app = express();

app.use(express.json())

const favLangs = ['Javascript','HTML','CSS','React']

app.get('/api/get-records',(req,res)=>{
    res.json({lang: favLangs})
})

app.post("/api/create-record", (req, res) => {
    const record = req.body.record
    favLangs.push(record)
    res.json({status: 'ok'})
});

// const PORT = process.env.PORT || 3001;

app.listen(3001, console.log('Server started on port http://localhost:3001'));
