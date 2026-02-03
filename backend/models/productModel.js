const { default: mongoose } = require('mongoose');
const mongooes=require('mongoose');

const productSchema=new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    images: [
        {String},
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    CreatedAt:Date
});

 const productModel=mongoose.model("product",productSchema);
module.exports=productModel;
