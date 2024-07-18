//require express and all routers
const express = require('express');
//requiring all router
const {additionRouter} = require('./Routes/addition')
const {subtractionRouter} = require('./Routes/subtraction')
//create express app
const app = express();

//mounting routers to correct routes
app.use('/add', additionRouter);
app.use('/subtract', subtractionRouter);

app.listen(4000, err => {
    if(err){
        console.log(`The following error occured when setting up the server ${err}`);
    }else{
        console.log('The server is listening on port 4000')
    }
})




