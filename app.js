const express = require("express");
const bodyParser = require("body-parser");
let items=["Buy Food","Cook Food","Eat Food"];
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  let today=new Date();
  let options={
    day:"numeric",
    month:"long",
    weekday:"short"
  };
  let day=today.toLocaleDateString("en-US",options);
  
  res.render("list",{kindOfDay:day,newListItems:items});
});

app.post("/",function(req,res){
  let item=req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});