const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  const userData = [
    {
      id: "01",
      name: "topaz",
    },
    {
      id: "02",
      name: "saritha",
    },
  ];
  res.send(userData);
});

module.exports = router;
