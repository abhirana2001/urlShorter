export const getRegisterPage = (req, res) => {
  return res.render("register.ejs");
};

export const getLoginPage = (req, res) => {
  return res.render("login.ejs");
};

export const postLoginPage = (req, res) => {
  res.cookie("isLoggedIn", true);
  return res.redirect("/");
};
