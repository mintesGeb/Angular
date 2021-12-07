var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
const secret = require("../config.json").secret;
let User = require("../util/userModel");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let auth=require("../controller/auth")
/* GET users listing. */
router.get("/",async (req, res, next) => {
  const users = await User.find();
  console.log(users);
  res.json({ data: users });
});
router.get("/:id",auth, async (req, res, next) => {
  let myUser = await User.findOne({ email: req.params.id });
  res.json({ data: myUser });
});
router.post("/signup", async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password });
    await newUser.save();
    res.json({ success: 1 });
  } catch (err) {
    next(err);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    const match = bcrypt.compare(req.body.password, user.password);
    if (!match) {
      throw new Error("invalid password");
    }
    const token = jwt.sign({ email: user.email, phone: user.phone }, secret);

    res.json({ success: 1, token });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  await User.findOneAndUpdate(
    { email: req.params.id },
    { ...req.body },
    { new: true }
  );
  res.json({ succcess: 1 });
});

router.delete("/:id", async (req, res, next) => {
  const deletedUser = await User.deleteOne({ email: req.params.id });
  res.json({ success: 1, data: deletedUser });
});
module.exports = router;
