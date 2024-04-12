const express = require('express');
const app=express();
const db=require('./database')
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
require('dotenv').config();
const passport = require('./auth');
const colors = require('colors')


app.get('/', (req, res, next)=>{
    res.send("Wel-Come to our hotel")
});

const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

const personRoutes = require('./routes/personRoutes.js');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

const PORT = process.env.PORT || 5000;
// const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`.magenta); 
})