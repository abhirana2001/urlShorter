import { verifyToken } from "../services/auth.services.js";

export const verifyJwtToken = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    req.user = null;
    return next();
  }
  try {
    let decodeToken = verifyToken(token);
    req.user = decodeToken;
  } catch (err) {
    req.user = null;
    console.log(err);
  }

  return next();
};
