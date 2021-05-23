const express = require("express");
const upload = require("./upload");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const server = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(fileUpload({
  createParentPath: true
}));

server.use(cors(corsOptions));

server.post("/upload", upload);

server.listen(8000, () => {
  console.log("Server started!");
});
