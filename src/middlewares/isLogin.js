const isLogin = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  return next();
};

module.exports = isLogin;

// const isLogin = (req, res, next) => {
//     if (req.session.user) {
//       res.locals.user = req.session.user;
//       return next();
//     }
//     res.redirect("/login");
//   };
