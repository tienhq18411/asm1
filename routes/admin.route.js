var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin.controller');
var validate = require('../validate/admin.validate')
// var authMiddleware = require('../middlewares/auth.middleware')

//Account
router.get('/viewAccount', controller.viewAccount);

router.get('/createAccountAdmin', controller.getCreateAccountAdmin);

router.post('/createAccountAdmin', validate.postCreateAccountAdmin, controller.postCreateAccountAdmin);

router.get('/createAccountStaff', controller.getCreateAccountStaff);

router.post('/createAccountStaff', validate.postCreateAccountStaff, controller.postCreateAccountStaff);


router.get('/deleteAccount/:username', controller.deleteAccount);

router.get('/updateAccountAdmin/:username', controller.getUpdateAccountAdmin);

router.post('/updateAccountAdmin/:username', controller.postUpdateAccountAdmin);

router.get('/updateAccountStaff/:username', controller.getUpdateAccountStaff);

router.post('/updateAccountStaff/:username', controller.postUpdateAccountStaff);


router.get('/', controller.index);

module.exports = router;