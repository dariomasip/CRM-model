const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authenticateController = {};

authenticateController.login = async (req, res) => {
  const { email, password } = req.body;

  // Try to find the user in the database
  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).send({
        message: "Login not successful",
        error: "User not found",
      });
    }

    // Create a token for the user
    const userForToken = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const tokenSession = jwt.sign(userForToken, `${process.env.JWT_KEY}`);

    // Return the token to the user
    return res.status(200).send({
      message: "Login successful",
      tokenSession,
    });
  } catch (error) {
    // Log the error and return an error
    console.log({
      error,
    });
    return res.send({
      errorMessage: error.message,
    });
  }
};

module.exports = authenticateController;
