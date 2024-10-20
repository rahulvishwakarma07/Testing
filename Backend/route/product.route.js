import express from 'express'
import { addproduct, fetchsingleproduct, productlist, removeproduct, updatedetail } from '../controller/product.controller.js';

const route  = express.Router();

route.post("/addproduct",addproduct)
route.get("/productlist",productlist)
route.put("/update/:_id",updatedetail)
route.get("/singleproduct/:_id",fetchsingleproduct)
route.delete("/delete/:_id",removeproduct)


export default route;