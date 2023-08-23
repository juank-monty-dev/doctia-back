// * Doctia routes
//! host + /api/doctia

const { Router } = require("express");

const { check } = require("express-validator");
const router = Router();

const { fieldsValidators } = require("../middlewares/fieldsValidators.js");
const { getAnswer1, getAnswer2 } = require("../controllers/doct.js");

// get answer 1st question
router.post(
  "/ans1",
  [
    check("question", "question is required").not().isEmpty(),
    check("question", "question must be at least 10 characters long").isLength({
      min: 3,
    }),
    fieldsValidators,
  ],
  getAnswer1
);
router.post(
  "/ans2",
  [
    check("question", "question is required").not().isEmpty(),
    check("question", "question must be at least 10 characters long").isLength({
      min: 3,
    }),
    fieldsValidators,
  ],
  getAnswer2
);

module.exports = router;
