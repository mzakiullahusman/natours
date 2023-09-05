const express = require('express');
const userController = require('../controllers/userController');
const app = express();

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`User id is: ${val} 😎`);
  next();
});

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
