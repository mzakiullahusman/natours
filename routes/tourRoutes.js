const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

router.route('/').get(tourController.getAllTours);

// router.use(tourController.checkBody);
router.post('/', tourController.createNewTour);

module.exports = router;
