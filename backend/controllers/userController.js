import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendToken } from "../util/features.js";
import jwt from "jsonwebtoken";

// ? Login User

const signupController = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.number || !req.body.fullName || !req.body.role) {
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
    // console.log(req.body);
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
// ? Controller for Login of Existing User Component

const loginController = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(200)
        .send({ message: "all fields must be filled", success: false });
    }
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid EMail or Password", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    // sendToken(res, user, 200, "Login Success");
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

//  ? Controller for Authentication of the User

const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

export { signupController, loginController, authController };
