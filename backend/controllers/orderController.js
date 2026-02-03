const orderModel=require('../models/orderModel');
const productModel=require('../models/productModel');

// Create a order-/api/v1/order/create

exports.createOrder=async (req,res,next)=>{
    const cartItems=req.body.cartItems;
     const amount = Number(cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.qty;
  }, 0).toFixed(2));
    const status="pending";

    const order =await orderModel.create({
        cartItems,amount,status})

// Updating Product stocks
cartItems.forEach(async(item)=>{
    const product= await productModel.findById(item.product._id);
    product.stock= product.stock-item.qty;
    await product.save();
})

res.json({
    success:true,
    order  
})
}