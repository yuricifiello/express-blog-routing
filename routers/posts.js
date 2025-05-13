const express = require("express");
const router = express.Router();
const { posts } = require("../data/posts");

// INDEX
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// SHOW
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Dettaglio del post ` + id);
});

// CREATE
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post ` + id);
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Cancellazione del post ` + id);
});

module.exports = router;
