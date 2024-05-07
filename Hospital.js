const express = require('express');
const app = express();
const user = [{
    "name": "John Smith",
    "kidney": [{
        "healthy": false
    }]
}];

app.get("/", function(req, res) {
    const john = user[0].kidney;
    const numberofKidney = john.length;
    let noOfHelathykidney = 0;

    for (let i = 0; i < john.length; i++) { // Added a space between let and i
        if (john[i].healthy)
        noOfHelathykidney += 1;
    }

    const unhealthy = numberofKidney - noOfHelathykidney;
    res.json({
        john,
        unhealthy,
        noOfHelathykidney
    });
});
app.use(express.json());
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    user[0].kidney.push({
        "healthy":isHealthy
    });
    res.json({
        "msg" :"done"
    });
});
app.put("/",function(req,res){
    if(!isanyUnhealthy(user))
    {
        res.status(404).json({
            "msg":"There is already healthy kidney"
        })
        return;
    }
    for(let i=0;i<user[0].kidney.length;i++)
    {
        user[0].kidney[i].healthy=true;
    }
    res.json({
        "success":"success"
    });
})
app.delete("/",function(req,res){
    if(!isanyUnhealthy())
    {
        res.status(411).json({
            "msg":"No unhelathy kidneys"
        })
        return;
    }
    const newKidney=[];
    for(let i=0;i<user[0].kidney.length;i++)
    {
        if(user[0].kidney[i].healthy)
        {
            newKidney.push(user[0].kidney[i]);
        }

    }
    user[0].kidney=newKidney;
    res.json({
        "msg":"success"
    })

})
function isanyUnhealthy()
{
    for(let i=0;i<user[0].kidney.length;i++)
    {
        if(!user[0].kidney[i].healthy)
        {
            return true;
        }
       
    }
    return false;
}
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
