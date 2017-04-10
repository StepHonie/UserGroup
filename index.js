var express=require('express');
// var bodyParser=require('body-parser');
var app=express();
var path=require('path');
var port=process.env.PORT || 3006;

// // mongo.connect("mongodb://127.0.0.1:27017/Punishment",function(err,db)
// {
//   if(err)
//   {
//     console.log(e.message);
//     process.exit(0);
//   }
  app.set('views','./views/pages');
  app.set('view engine','ejs');
  app.use(express.static(path.join(__dirname,'public')));
  // app.use(bodyparser());
  app.listen(port);

  console.log("I'm listening port: "+port);

  app.get('/',function(req,res)
  {
    res.render('userGroup',{
      data:'Hello Stephanie!',

    });
  });

// });
