const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/top-5-cheap-tours')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

router.route('/').get(tourController.getAllTours);

// router.use(tourController.checkBody);
router.post('/', tourController.createNewTour);

module.exports = router;
