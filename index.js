const express = require("express");
const fs = require('fs');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const tradesRoutes = require('./routes/trades.js');

const app = express();
const PORT = 3000;

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :date[iso]"
  )
);
app.use(bodyParser.json());

app.use('/trades', tradesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
