var express = require('express');
var router = express.Router();
var admincontroller = require('../Controllers/AdminController')
/* GET home page. */
router.get('/add', function (req, res, next) {
  res.cookie('name','abhi',{maxAge:600})
  .render('Admin/Addproduct.ejs');
});
router.post('/add', admincontroller.add)
router.get('/showall', admincontroller.showall)
router.get('/delete/:id', admincontroller.deleteProduct)
router.get('/update/:id', admincontroller.updateForm)
router.post('/update/:id', admincontroller.updateProduct)

module.exports = router;
