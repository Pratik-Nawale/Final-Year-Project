import jwt from "jsonwebtoken";

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: "1d",
  });
  const cookieOptions = {
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };

  return res.status(code).cookie("user-token", token, cookieOptions).json({
    success: true,
    message,
    token
  });
};

export {sendToken}
