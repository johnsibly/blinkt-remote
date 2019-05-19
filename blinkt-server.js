const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.put('/led', function(req, res) {
    let led = req.get('led');
    let ledValue = req.get('ledValue');
    console.log(`The values ${led} and ${ledValue} where sent`);
    return res.send(`The values ${led} and ${ledValue} where sent`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));