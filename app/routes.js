// eti express er ekti by default router eke install kora laage nah!
const router = require("express").Router();

// ei route ti alltime dite hoy karon eti api er health check kore! Digital Ocean soho boro boro site e host korar time e ei route nah dile problem kore:

router.get("/health", (_req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

module.exports = router;
