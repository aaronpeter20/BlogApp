const express = require('express');
const app = express();
require('dotenv').config();
require('./db/connection');
const cors= require('cors')
app.use(cors())

const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRoutes); 
app.use('/blog', blogRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
