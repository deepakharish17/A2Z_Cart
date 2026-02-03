const productModel=require('../models/productModel');


//Get all products  api- /api/v1/products
exports.getproducts=async(req,res,next)=>{
    const query=req.query.keyword?{ name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}

    const products=await productModel.find(query);
res.json({
    success:true,
    products
})
}

//Get single products  api- /api/v1/product/:id
exports.getSingleproducts= async(req,res,next)=>{
    // console.log(req.params.id);
    try{
    const product=await productModel.findById(req.params.id);
    res.json({
        success:true,
        product
    })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}