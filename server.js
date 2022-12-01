const express = require('express');
const app = express();
const cors = require('cors');
const port = 3333;

app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.get('/', async (req, res) => {
    res.sendFile(`${ __dirname }/build/index.html`);

});

app.get('/test', cors(corsOptions), (req, res) => {
    res.send({
        message: 'Hello World!'
    })
});

app.listen(port, () => console.log(`Running on ${ port }! 👉👈`));
