const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// connection to mongo db
// password:e4emoqA6KvjlARaC


mongoose.connect(process.env.CONNECTION_STRING,{
   useNewUrlParser: true,
  useUnifiedTopology: true,
})

//mongoose schema
const contactSchema = new mongoose.Schema({
   name: String,
  email: String,
  message: String,
})

const Contact = mongoose.model('Contact', contactSchema)
//route to handel form subission
 app.post('/contact', async (req, res)=>{
   try{
      //extract the form data
      const{ name, email, message } = req.body;

      const contact = new Contact({
         name,
         email,
         message,
      })
       await contact.save()
       res.status(200).json({message:`Contact Form Data save Successfully`})
   }catch (error){
      res.status(500).json({ error: 'An error occurred while saving the contact form data' })
   }
})
app.listen(5000, ()=>{
   console.log(`Server started on port 5000`)
})
 
