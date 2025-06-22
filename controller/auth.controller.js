import {
  createUser,
  findUserByEmail,
  generateToken,
  hashPassword,
  verifyPassword,
} from "../services/auth.services.js";

export const getRegisterPage = (req, res) => {
  if (req.user) return res.redirect("/");

  return res.render("register.ejs", { errors: req.flash("errors") });
};

// register controller

export const postRegisterData = async (req, res) => {
  if (req.user) return res.redirect("/");

  try {
    const { name, email, password } = req.body;

    const userExsist = await findUserByEmail(email);

    if (userExsist) {
      req.flash("errors", "user already exsist . please login instead");
      return res.redirect("/register");
    }
    const hashedPassword = await hashPassword(password);

    const userId = await createUser({ name, email, password: hashedPassword });

    res.redirect("/login");
  } catch (err) {
    console.log(err);

    res.status(505).send("<h1>server error</h1>");
  }
};

export const getLoginPage = (req, res) => {
  if (req.user) return res.redirect("/");

  return res.render("login.ejs");
};

// login controller

export const postLoginData = async (req, res) => {
  if (req.user) return res.redirect("/");

  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send("<h1>your email or password is not correct </h1>");
    }
    const isPasswordTrue = await verifyPassword(user.password, password);

    if (!isPasswordTrue) {
      return res
        .status(404)
        .send("<h1>your email or password is not correct </h1>");
    }

    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    res.cookie("jwtToken", token);
    return res.redirect("/");
  } catch (err) {
    console.log(err);

    res.status(505).send("<h1>server error</h1>");
  }
};

export const getMe = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).send("<h1>user is not logged in</h1>");
  }
  return res
    .status(200)
    .send(`<h1>user name: ${user.name}  user email: ${user.email}</h1>`);
};

export const getLogout = (req, res) => {
  res.clearCookie("jwtToken");
  return res.redirect("/login");
};
