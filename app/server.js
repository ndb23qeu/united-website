const express = require('express')
const app = express();
const port = 3000

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const nodemailer = require('nodemailer');
const mailer = nodemailer.createTransport(
    {
        service:'gmail',
        auth: {
            user: 'mrguppy5004@gmail.com',
            pass: 'vlio xfpr tgvy uqql '
        }
    }
)
const fs = require('fs')

app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.sendFile('public/index.html', {root: __dirname},(err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.get('/climate', (req,res)=> {
    res.sendFile('public/climate.html', {root: __dirname},(err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.get('/water', (req,res)=> {
    res.sendFile('public/water.html', {root: __dirname},(err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.get('/land', (req,res)=> {
    res.sendFile('public/land.html', {root: __dirname},(err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.get('/signup', (req,res)=> {
    res.sendFile('public/signup.html', {root: __dirname},(err)=> {
        if (err){
            console.log(err);
        }
    })
})

app.get('/team', (req,res)=> {
    res.sendFile('public/team.html', {root: __dirname},(err)=> {
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
    const path = 'accounts/'+ data.email + '.json'
    dataS = JSON.stringify(data)
    fs.writeFile(path, dataS,(err) =>{
        if (err) {
            console.error('error!', err)
            res.send(err)
        } else {
            mailOptions = {
                from:'mrguppy5004@gmail.com',
                to:data.email,
                subject:'Thank you for signing up',
                text: 'thank you '+ data.firstName + ' for signing up for our mailing list'
            }
            mailer.sendMail(mailOptions , (err) =>{
                if (err){
                    res.send(err)
                }else {
                    res.send("complete")
                }
                
            })
            res.send("complete")
        }
    })
})