const express = require('express');
const app=express();
const db=require('./database')
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
require('dotenv').config();


app.get('/', (req, res, next)=>{
    res.send("Wel-Come to our hotel")
});


const personRoutes = require('./routes/personRoutes.js');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, ()=> {
    console.log("Server running on port no 3000");
})