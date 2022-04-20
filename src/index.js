let express = require("express")

let app = express();

app.get("/funcao", function (req, res) {
    // return res.send('tamo na /funcao')
    return res.json({
        nome: 'ana'
    })
})

app.listen(4452, function () {
    console.log('rodou')
})

// http://localhost:4452/