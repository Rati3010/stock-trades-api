const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :date[iso]"
  )
);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
