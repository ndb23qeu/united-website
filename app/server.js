const express = require('express')
const app = express();
const port = 3000

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const fs = require('fs')

app.use(express.static('public'));


app.get('/', (req,res)=> {
    res.sendFile('index.html', (err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.listen(port, () => {
    console.log(`My first app listening on port ${port}!`)
});

app.post('/signupHandler', jsonParser, (req,res) => {
    console.log(process.cwd())
    const data = req.body;
    data.age=0
    data.verified=false
    const path = 'accounts/'+ data.email + '.json'
    dataS = JSON.stringify(data)
    fs.writeFile(path, dataS,(err) =>{
        if (err) {
            console.error('error!', err)
            res.send(err)
        } else {
            res.send("yay")
        }
    })
})