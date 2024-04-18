import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  number: {
    type: String,
    required: [true, "Mobile number is required"],
  },
  role: {
    type: String,
    required: [true, "Please select role"]
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// ? Static Signup Method

userSchema.statics.signup = async (email, password) => {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

const userModel = mongoose.model("users", userSchema);

export default userModel;
