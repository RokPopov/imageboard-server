const { Router } = require("express");

const Image = require("../models").image;

const router = Router();

// router.get("/", async (request, response) => {
//   try {
//     const images = await Image.findAll();
//     response.send(images);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

router.get("/", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Image.findAndCountAll({ limit, offset })
    .then((result) => res.send({ images: result.rows, total: result.count }))
    .catch((error) => next(error));
});

router.post("/", async (req, res, next) => {
  try {
    const images = await Image.create(req.body);
    res.json(images);
  } catch (error) {
    console.log(error);
    next();
  }
});

router.get("/:imgId", async (req, res, next) => {
  try {
    const imgId = req.params.imgId;
    const image = await Image.findByPk(imgId);
    res.json(image);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
