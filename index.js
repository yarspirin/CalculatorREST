const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.status(400).json({
        message: "Please input expression."
    });
});

app.get('/:expression', (req, res) => {
    const rawExpression = req.params["expression"];
    const expression = rawExpression.replace(':', '/');
    try {
        res.status(200).json({
            result: eval(expression)
        });
    } catch (e) {
        res.status(400).json({
            message: "Your expression is not valid",
            description: e.message
        })
    }
});

app.listen(PORT);