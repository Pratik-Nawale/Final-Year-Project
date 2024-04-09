import JWT from "jsonwebtoken";

const authMiddleWare = async (req, res, next) => {
  const authorization = req.header;
  if (!authorization) {
    return req.status(401).json({ error: "Authentication token required" });
  }
  try {
    // console.log(req.headers["authorization"])
    // const token = authorization.split(' ')[1];
    const token = req.headers["authorization"].split(" ")[1];
    // console.log(token)
    JWT.verify(token, process.env.SECRET, (err, decode) => {
      if (err) {
        console.log(err);

        return res.status(200).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
          req.body.userId = decode.id;
        //   return res.status(200).send({
        //       message: "Auth Success",
        //       success: true,
        //     });
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
export { authMiddleWare };
