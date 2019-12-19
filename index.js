  
var express = require('express');
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer({dest:'Uploads/Images'});
const dotenv=require("dotenv");
dotenv.config();
var cloudinary=require("cloudinary").v2;
var session=require('express-session');

cloudinary.config({
    cloud_name:''+process.env.CLOUD_NAME,
    api_key:''+process.env.API_KEY,
    api_secret:''+process.env.API_SECRET

})
// var multerCloudinary = require('multer-cloudinary');
// var cloudinary = require('cloudinary').v2;
// var cloudinaryStorage = multerCloudinary({cloudinary: cloudinary});



var app = express();
// var comment=require('./post');
// app.use('/',comment);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
var mongoClient=require("mongodb").MongoClient;
var db;
var url;
if(process.env.DB_URL)
   {url=process.env.DB_URL;
    console.log(url)}
else
   {
  
url="mongodb://127.0.0.1:27017";
}
mongoClient.connect(url,{ useUnifiedTopology: true } ,function(error,client){
         if (error)
            throw error;
        db=client.db("blog");

        console.log("connecting.");
});
// var db;
// mongoClient.connect(url,function(err,client){
// if (err) throw err;
// db=client.db("blog");
// });

app.use(
    session({
        secret: "Express session secret"
    })
);

 app.get("/blog",function(req,res){

   db.collection('users').find({}).toArray(function(err,result){
            if(err)
             throw err;
            
          //  console.log(result)
                   
   
   
              res.json(result) 
});
 });



app.use(express.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.get("/", function(req, res){
    if(req.session.loggedIn){
       res.redirect("/home-login")
    }
    else
    {res.render("home" , {
        style: "/style.css",
        script:"/data.js"
    })};

});
app.get("/contact-us", function(req, res){
    res.render("contact-us" , {
        style: "/style.css.css",

    
    });

});
app.get("/about-us", function(req, res){
    res.render("about-us" , {
        style: "/style.css",
    
    });

});
app.get("/contact-us-login", function(req, res){
  res.render("contact-us-login" , {
      style: "/style.css",
  
  });

});
app.get("/about-us-login", function(req, res){
  res.render("about-us-login" , {
      style: "/style.css",
  
  });

});
app.post("/Upload",upload.single("memes"), function(req, res){
              
                 console.log(req.body.name);
                 console.log(req.body.username);
                 console.log(req.file.path);
                //  var c = req.file.path;
                //   var ctx = c.getContext("2d");
                //   ctx.font = "30px Arial";
                //    ctx.fillText("Hello World",10,50);
                console.log("else"); 
                  



                 db.collection('users').find({}).toArray(function(err,result1){
                    if(err)
                     throw err;
                     setTimeout(function(){
                        console.log("THIS IS");
                    }, 3000);
                     var lengt=result1.length;
                //      console.log(lengt);
                    

                cloudinary.uploader.upload(req.file.path,function(error,result2){
            // console.log(error);
            
                          if (error)
                            throw error;
                     //   console.log(lengt);
                         console.log(result2.secure_url);


               db.collection('users').insertOne({"id":result1.length+51,"name":req.body.name,"url":result2.secure_url,"width":"568","Height":"335","category":"userUpload","username":req.body.username},function(err,result){
                if(err)
                 throw err;
                // console.log(result);
                 setTimeout(function(){
                    console.log("THIS IS");
                }, 2000);
                console.log(req.file.path);
                
                });
              });
            });
            req.session.loggedIn==true;
            res.redirect("/");

                   


        
          


    

});
// app.get('/post/:post_id', function (req, res) {
//     res.send(parseInt(req.params.post_id)+"and"+parseInt(req.params.post_id)+"");
//   //  console.log(req.params());

// })
app.get('/post/:postID', function (req, res) {
    // res.json('This is posted image route');
     
  
    var amit = [];
    db.collection('comment').find({}).toArray(function(err,result){
      if(err)
        throw err;
        for(var i=0;i<result.length;i++){
          if(result[i].id==parseInt(req.params.postID)){
            amit.push(result[i])
          }
        }
        //console.log(result);
       // console.log(amit)
      res.render("post",{
        title:"post with post id",
          style:"/post.css",
          
           arr:amit,
           username:req.session.username
      });
      // res.json(result);
    });
      
  });
 
  app.post('/post/:postID', function (req, res) {
    // res.json('This is posted image route');
    db.collection('comment').insertOne({"id": parseInt(req.params.postID),"username":req.body.username,"comment":req.body.comment},function(err,result){
      if(err)
        throw err;
       // console.log(result);
      res.json(result);
   
    });
      
  });
  
//my_routes added

app.post("/add",function(req,res){
  db.collection("userDB").insert(req.body);
  console.log("Insert successfully");
 res.render("myprofile", {
      style:"myprofile.css",
      title:"Profile Page",
      username:req.body.username,
      email:req.body.email
    });
});

app.post("/verify",function(req,res){
  db.collection("userDB").find().toArray(function(err,result){
          if (err) throw err;
      for(var i=0;i<result.length;i++){
          if(req.body.email==result[i].email &&
               req.body.password==result[i].password)
               {//store id here and then use it in /edit
                  user_email = req.body.email;
                  req.session.username=result[i].username;
                  req.session.email=result[i].email;
                  console.log("correct");
          req.session.loggedIn=true;
               }
      }
      res.redirect("/user");
  });
   });

   app.get("/user",function(req,res){
    if(req.session.loggedIn==true){
      console.log("signing");
        db.collection("users")
        .findOne({email:user_email},function(err,result){
            if(err) throw err;
          
            res.render("myprofile",{
                data:result,
                title:"edit",
                username:req.session.username,
                email:req.session.email,
                password:req.session.password
            });
        //res.render("myprofile");
        });
    }
    else{
        res.redirect("/");
    }
});



app.get("/home-login", function(req, res){
  res.render("home-login" , {
      style: "style.css",
      script:"/data.js"
  });
});
app.get("/edit",function(req,res){
  db.collection("userDB")
  .findOne({email:req.session.email},function(err,result){
      if(err) throw err;
       console.log(result);
      res.render("editProfile",{
          data:result,
          title:"edit",
          username:req.session.username
      });
  });
 
});

app.post('/editDB', function(req, res, next) {
          //     var data = {
          //     username: req.body.username,
          //     email: req.body.email,
          //     password: req.body.password,
          //     phone:req.body.phone
          //   };
          //   var id = req.body.id;             
   db.collection('userDB').updateOne({email:user_email},{$set:req.body}, function(err, result) {
                console.log(user_email)
                console.log('User updated');
               // db.close();
              });
             req.session.username=req.body.username;
             req.session.password=req.body.password;
             req.session.email=user_email;
            res.redirect("/user");
          });

  app.get('/NotLoginPost/:postID', function (req, res) {
  // res.json('This is posted image route');
  var amit = [];
    db.collection('comment').find({}).toArray(function(err,result){
      if(err)
        throw err;
        for(var i=0;i<result.length;i++){
          if(result[i].id==parseInt(req.params.postID)){
            amit.push(result[i])
          }
        }
        //console.log(result);
       // console.log(amit)
      res.render("NotLoginPost",{
        title:"post without post id",
          style:"/post.css",
          
           arr:amit
      });
      // res.json(result);
    });
      
});




app.get("/logout",function(req,res){
  req.session.destroy();
  res.redirect("/");
});


app.listen(process.env.PORT || 4000, function () {
    console.log("Your App is running at port 4000");
});