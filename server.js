const express = require("express");
const upload = require("./upload");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const path = require('path');

const server = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

server.use(fileUpload({
  createParentPath: true
}));

server.use(express.static(path.join(__dirname, 'data')));
server.use(cors(corsOptions));

server.post("/upload", upload);
server.get("/get/:path", (res, req)=> {
    res.path.slice(0,"http://45.141.76.252:8000/get/".length);

})

server.listen(8000, () => {
  console.log("Server started!");
});
