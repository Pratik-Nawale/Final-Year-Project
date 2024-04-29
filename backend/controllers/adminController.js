import userModel from "../models/userModel.js";

const getAllUsersController = async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).send({
        success: true,
        message: "user data list",
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while fetching users",
        error,
      });
    }
  };

  const deleteUserAccountControlller = async(req, res) => {

    try {
      // console.log(req.body._id);
      await userModel.findByIdAndDelete(req.body._id);
  
      res.status(200).send({
        success: true,
        message: "Deleted user account",
        // data: doctor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting user account",
        error,
      });
    }
  };

  export {getAllUsersController, deleteUserAccountControlller};