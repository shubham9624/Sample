const express=require('express');
const app = express();
//Zod validat i/p
const zod=require('zod');
const schem=zod.array(zod.number());
function userNameMiddleware(req, res, next) {
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="shubham" || password!="123")
    {
        res.status(404).json({"msg":"Invalid Input"});
        return;
    }
    next();
}
function kidneyCheck(req, res, next) {
  
    const kidneyId= req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(404).json({"msg":"Invalid Input"});
        return;
    } 
    next();
}
    
// app.get("/health-checkup",userNameMiddleware,kidneyCheck, function(req, res) {
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId= req.query.kidneyId;
//     res.status(200).json({"msg":"Kidney fine ",
// "kidneyId":kidneyId,"username":username,"password":password});
    
// });
//---------------------or------------------------//
//app.use(userNameMiddleware);
//app.use(kidneyCheck);
app.use(express.json());
app.get("/health-checkup",userNameMiddleware,kidneyCheck, function(req, res) {
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId= req.query.kidneyId;
    res.status(200).json({"msg":"Kidney fine ",
"kidneyId":kidneyId,"username":username,"password":password});
    
});
app.post('/health-checkup', function(req, res) {
    const kidneyId = req.body.kidneyId;
    const response= schem.safeParse(kidneyId);
    const kidneyLength = kidneyId.length; // Accessing the length of the array directly

    // res.send("You have " + kidneyLength + " kidney(s)");
    res.send(response);
});
///Global Catch
// app.use(function(err, req, res,next) {

//     res.json({
//         "msg": "Something went wrong"
//     })
// });
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});