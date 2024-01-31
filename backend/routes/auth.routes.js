const Router = require("express");
const PostSchema = require("../models/User");

const router = new Router();


router.post('/create', (req, res) => {
	try {
       const {email, password} = req.body;

       const candidate = PostSchema.find
	} catch(e) {
       console.log(e);
       res.send({message: "Server message"})
	}
})
