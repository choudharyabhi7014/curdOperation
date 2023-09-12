const mongoose=require('mongoose')
const connect=()=>{
    mongoose.connect('mongodb+srv://choudharyabhi7014:USNOTaz39nPkleQ1@cluster0.5n5xgwf.mongodb.net/ProductData?retryWrites=true&w=majority')
    .then((res)=>{
        // console.log(res)
    })
    .catch((err)=>{console.log(err)})
}
module.exports=connect