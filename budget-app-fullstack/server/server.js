const express = require("express");
const cors = require("cors");
// mongoose

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "OK" });
});

// GET budget
// CREATE budget
// UPDATE budget
// DELETE budget

// GET expenses
// CREATE expenses
// UPDATE expenses
// DELETE expenses

app.listen(4000, () => console.log("Server started at http://localhost:4000"));
