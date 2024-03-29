const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Connects to the Database
connectDB();

app.use(express.json({extended:false}));

//Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));