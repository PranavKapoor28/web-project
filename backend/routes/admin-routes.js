const express = require("express");
const {
  addAdmins,
  addCars,
  blockUser,
  loginAdmin,
  getAllUsers,
} = require("../controllers/admin-controllers");

const router = express.Router();

router.post("/", addAdmins);
router.post("/add-car", addCars);
router.post("/block-user", blockUser);
router.post("/login", loginAdmin);
router.get("/getUsers", getAllUsers);


module.exports = router;
