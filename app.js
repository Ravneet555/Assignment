const express = require('express');
const router = require("./Routes/Pages");
const fs = require('fs').promises;// first we get fs for the code as it is required we will use it with promises
const app = express(); // express is also required for as framework as we are making a web app
const PORT = 3000;


app.use(router); // impleminting thr routes
app.get("/", async(req,res)=>{ // using async as we want the code to process in the  background withiout staying on one task
    try {// using try and catch for the programm so we can throw can exception the try statement fails to run.
        const data = await fs.readFile("example.txt", "utf-8");
    res.send(data);
    } catch (error) {// following error will be thrown if try fails
        console.error('error reading file:', error)
        res.status(500).send("Internal server error");
    }
});

/*app.get('/',(res,req)=>{
    res.send("hello world");
});*/


// telling the app what port will  be used to run the application on
app.listen(PORT, ()=>{
console.log(`Server is running on http://localhost:${PORT}`);
});