const express = require("express");
const app = express();

app .use("/static", express.static("public"))
    .use("/secret", express.static("pages-admin"))
//added a /static url path to my web server (app), when hit it will run our public folder

app.listen(5001, ()=>{
    console.log("listening on port 5001")
});

