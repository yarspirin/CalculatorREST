const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Please input expression."
    });
});

app.get('/:expression', (req, res) => {
    const expression = req.params["expression"];
    res.status(200).json({
        result: eval(expression)
    });
});

app.listen(PORT, () => console.log("Server running"));