const router = require("express").Router();
router.use("/players", require("./players"));
router.use("/newGame", require("./newGame"))

router.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});  

module.exports = router;