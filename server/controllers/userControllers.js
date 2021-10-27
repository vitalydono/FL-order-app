const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!(email, password)) {
      res.status(400).send({ message: "content cannot be empty" });
      return;
    }
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(404).send("User already exist. please try again");
      
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign({ email: user.email, id: user._id }, 'test', {
      expiresIn: "1h",
    });
    
    res.status(201).json({result:user, token });
  } catch (error) {
    res.status(500).json({ message:"something went wrong!!!" ,error})
  }
};



exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email })

    // cheking if is there a user
    if (!oldUser) return res.status(404).json({ message:"User dosent exist!!!!!"})

    //comparing if the passwords are the same
    const isPasswordCorrect = await bcrypt.compare( password, oldUser.password )

    //cheking if the passwords correct
    if (!isPasswordCorrect) return res.status(400).json({ message:"Invalid psaaword!! try again"})
      
    // storing ihe info about the user in the token
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }
      , 'test'
      ,{expiresIn:"12h"}
      )
      res.status(200).json({result: oldUser, token })

  } catch (error) {
    res.status(500).json({ message:"something went wrong!!!",error})
  }
};
