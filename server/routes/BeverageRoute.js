const express = require("express");
const router = express.Router();
const beverageController = require("../controller/BeverageController.js");

router.get("/", (req, res) => {
  res.send("Beverage Route");
});
router.get("/getAllAlcoholicBases", beverageController.getAllAlcoholicBases);
router.get("/getAllJuices", beverageController.getAllJuices);
router.get("/getAllMixers", beverageController.getAllMixers);
router.get("/getAllLiqueurs", beverageController.getAllLiqueurs);
router.post(
  "/calculateClosestDrinks",
  beverageController.calculateClosestDrinks
);

module.exports = router;
