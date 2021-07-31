const express=require('express');
const Card=require('./../models/cardModel');
const router=express.Router();

router.get("/:id",async(req,res)=>{
    let card= await Card.findById(req.params.id);

    if(card)
    { res.render('./preview',{card:card});}
});




module.exports = router;