const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", cors(), (req, res) => {

})

app.post("/", cors(), async(req, res) => {
    const {email, passworc} = req.body;
})
