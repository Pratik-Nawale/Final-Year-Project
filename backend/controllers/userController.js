import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

// ? Login User

const signupController = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      return res
        .status(200)
        .send({ message: "all fields must be filled", success: false });
    }
    if (!validator.isEmail(req.body.email)) {
      return res
        .status(200)
        .send({ message: "Email is not valid", success: false });
    }
    if (!validator.isStrongPassword(req.body.password)) {
      return res
        .status(200)
        .send({ message: "Passwors is not Strong Enough", success: false });
    }
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    console.log(req.body);
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
const loginController = async (req, res) => {
  res.status(200).send({ message: "Login Success" });
};

export { signupController, loginController };
