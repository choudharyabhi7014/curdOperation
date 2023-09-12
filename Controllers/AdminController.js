const Product = require('../Models/shopModel')
const id = require('mongoose')
exports.add = (req, res, next) => {

    let image = req.body.image
    let name = req.body.name
    let price = req.body.price
    let details = req.body.details
    // console.log(name)
    const product = new Product({
        image: image,
        name: name,
        price: price,
        details: details
    })
    product.save()
        .then((result) => {
            console.log(result)
        })
        .catch((err) => { console.log(err) })
    res.redirect('/admin/add')
}

exports.showall = (req, res, next) => {
    Product.find({})
        .then((data) => {
            res.render('Admin/showAll.ejs', { data })
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.deleteProduct = (req, res, next) => {
    var id = req.params.id;
    Product.findByIdAndDelete(id)
        .then((result) => {
            // console.log(result)
            res.redirect('/admin/showall')
        })
        .catch((err) => {
            console.log(err)
        });
}

exports.updateForm = (req, res, next) => {
    const id = req.params.id
    Product.findById(id)
        .then((result) => {
            // console.log(result)
            res.render('Admin/updateForm.ejs', result)
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.updateProduct = (req, res, next) => {
    const updateId = req.params.id
    const updateProduct = {
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        details: req.body.details
    }
    // console.log(updateProduct)
    Product.findByIdAndUpdate(updateId, { $set: updateProduct })
        .then((result) => {
            // console.log(result)
            res.redirect('/admin/showall')
        })
        .catch((err) => console.log(err))
}