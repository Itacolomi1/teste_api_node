import express from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/users.js';

// The whole application lies on this funtion
const app = express(); 
const PORT = process.env.PORT || 3000;
console.log('funcionou alal');

app.use(bodyParser.json());

app.use('/users', usersRouters);


app.get('/',(req,res)=>{ res.send('Hello from Homepage');});

app.listen(PORT,() => console.log('server Running on port: http://localhost:' + PORT));
