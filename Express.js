const express = require('express');

function calculate(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) { // Changed '<' to '<='
        ans += i;
    }
    return ans;
}

const app = express();

app.get("/", function (req, res) {
    const n = req.query.a;
    const ans = calculate(n);
    res.send(ans.toString()); 
});

app.listen(3000); 
