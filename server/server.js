
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
require('dotenv').config()
console.log(process.env.CONNECTION_STRING)

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

const Contact = mongoose.model("Contact", contactSchema)
//route to handel form subission
app.post('/api/contact', async (req, res) => {
   try {
     // Extract the form data
     const { name, email, subject, message } = req.body;
 
     const contact = new Contact({
       name,
       email,
       subject,
       message,
     });
 
     // Save the form data to MongoDB
     await contact.save();
 
     // Send a success response
     res.status(200).json({ message: 'Contact form data saved successfully' });
   } catch (error) {
     // Send an error response
     res.status(500).json({ error: 'An error occurred while saving the contact form data' });
   }
 });
 
 
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
   console.log(`server is running on port ${PORT}`)
})
 
