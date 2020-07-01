const router = require("express").Router();

//api routes go here

router.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });  

module.exports = router;