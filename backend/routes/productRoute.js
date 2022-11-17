const express=require("express");
const { createProduct } = require("../controllers/productController");
const router=express.Router();
const protect = require("../middleWare/authMiddleWare");
router.post("/",protect,createProduct);
module.exports=router;