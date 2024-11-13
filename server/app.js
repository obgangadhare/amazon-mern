const routes = require('./Routes/index');
const  express = require('express');
const app = express();
const PORT = 5400;
app.use(express.json());

// CORS issue will be solved(we have to resolve cors issue for trust the origins of FE and BE)
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();

})

app.use("/",routes);
app.use((req,res)=>{
    res.status(404).json({messsage:"routes not found"});
});
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
});