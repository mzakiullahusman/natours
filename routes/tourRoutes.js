const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

router.route('/').get(tourController.getAllTours);

router.use(tourController.checkBody);
router.post('/', tourController.checkBody, tourController.createNewTour);

module.exports = router;
