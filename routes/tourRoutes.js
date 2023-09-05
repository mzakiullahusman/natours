const express = require('express');
const tourController = require('./../controllers/tourController');
const app = express();

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${val} 😎`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createNewTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

module.exports = router;
