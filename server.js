var express=require('express');
var app=express();
app.get("/about",function(req,res){
    res.send('hii papals ');
});

app.use(express.static(__dirname+'/public'));
app.listen(3000);