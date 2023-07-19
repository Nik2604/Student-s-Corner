if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
// const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;
const middleware = require('./middleware');
const Registeruser = require('./models/model');
const jwt = require('jsonwebtoken');
// // const jobsRouter = require('./routers/job');

// const passport = require('passport');
// const users = require('./routers/user'); 

const app = express();
// app.use(passport.initialize());
// require('./passport')(passport);

// app.use('/api/users', users);





const db = require("./db");
db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());

// app.use('/jobs', jobsRouter);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);

app.post('/register',async (req, res) =>{
  try{
      const {username,email,password,confirmpassword} = req.body;
      let exist = await Registeruser.findOne({email})
      if(exist){
          return res.status(400).send('User Already Exist')
      }
      if(password !== confirmpassword){
          return res.status(400).send('Passwords are not matching');
      }
      let newUser = new Registeruser({
          username,
          email,
          password,
          confirmpassword
      })
      await newUser.save();
      res.status(200).send('Registered Successfully')

  }
  catch(err){
      console.log(err)
      return res.status(500).send('Internel Server Error')
  }
})

app.post('/login',async (req, res) => {
  try{
      const {email,password} = req.body;
      let exist = await Registeruser.findOne({email});
      if(!exist) {
          return res.status(400).json({message: 'User Not Found'});
      }
      if(exist.password !== password) {
          return res.status(401).json({message: 'Invalid credentials'});
      }
      let payload = {
          user:{
              id : exist.id
          }
      }
      jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
        (err,token) =>{
            if (err) throw err;
            return res.json({token})
        }  
      );

  }
  catch(err){
      console.log(err);
      return res.status(500).json({message: 'Server Error'})
  }
});


app.get('/myprofile',middleware,async(req, res)=>{
  try{
      let exist = await Registeruser.findById(req.user.id);
      if(!exist){
          return res.status(400).send('User not found');
      }
      res.json(exist);
  }
  catch(err){
      console.log(err);
      return res.status(500).send('Server Error')
  }
})

const jobsRouter = require("./routers/jobs");
app.use("/jobs", jobsRouter);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});