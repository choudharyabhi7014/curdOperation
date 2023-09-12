const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', UserSchema)




//const  UserSchema=new  Schema({
    //     name:String,
    //     price:Number,
    //     description:String,
    //     imgUrl:String
    // })