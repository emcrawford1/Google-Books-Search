const router = require("express".Router();
const bookRoutes = require("./googleBooks");

router.use("/books", bookRoutes);

module.exports = router;