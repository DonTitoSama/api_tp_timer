const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/tp_1');

app.use(express.urlencoded());
app.use(express.json());

const userRoute = require(`./routes/userRoute`);
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});