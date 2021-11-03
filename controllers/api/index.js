const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./blogRoutes");
const commentRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
