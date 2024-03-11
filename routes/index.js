const router = require("express").Router();
const Todo = require("../models/Todo");
const Description = require("../models/Description");

router.get("/", async (req, res) => {
    try {
        // Fetch todos
        const todos = await Todo.find();

        // Fetch descriptions
        const descriptions = await Description.find();

        res.render("index", { todos, descriptions });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

module.exports = router;

module.exports = router;