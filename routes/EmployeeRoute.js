// const express = require('express');
// const router = express.Router();

// const EmployeeController = require('../controllers/EmployeeController');

// router.get('/',EmployeeController.index);

// router.post('/store',EmployeeController.store);

// router.post('/show/:id',EmployeeController.show);

// router.post('/update',EmployeeController.update);

// router.post('/delete/:id',EmployeeController.destroy);

// EmployeeRoute.js

const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

router.get('/', EmployeeController.index);
router.post('/store', EmployeeController.store);
router.post('/show', EmployeeController.show);
router.post('/update', EmployeeController.update);
router.delete('/delete/:id', EmployeeController.destroy);

module.exports = router;
