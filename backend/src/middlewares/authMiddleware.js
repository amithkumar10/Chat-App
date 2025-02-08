import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // Retrieve token from cookies
  const token = req.cookies.IAMIN;

  const secret = process.env.JWT_SECRET;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  // Verify the token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      // Handle token verification errors
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token has expired" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid token" });
      } else {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }
    }

    // Attach decoded user data to request
    req.user = decoded;
    console.log("Decoded token:", decoded);

    // Proceed to the next middleware or route handler
    next();
  });
};
