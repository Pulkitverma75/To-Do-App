const router = require("express").Router();
const Todo = require("../models/Todo.js");
const Description = require("../models/Description.js");

// Route for adding a new todo and description
router.post("/add/todo", async (req, res) => {
    try {
        const { todo, description } = req.body;

        // Create a new todo
        const newTodo = new Todo({ todo });

        // Create a new description
        const newDescription = new Description({ description });

        // Save both todo and description
        await newTodo.save();
        await newDescription.save();

        console.log("Successfully added todo and description!");
        res.redirect("/");
    } catch (error) {
        console.error("Error adding todo and description:", error);
        res.status(500).send("Error adding todo and description");
    }
});

// Route for deleting a todo
router.get("/delete/todo/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        // Delete todo
        await Todo.deleteOne({ _id });
        await Description.deleteOne();

        console.log("Deleted Todo Successfully!");
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).send("Error deleting todo");
    }
});

module.exports = router;