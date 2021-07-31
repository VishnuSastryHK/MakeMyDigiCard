const express=require('express');
const Card=require('./../models/cardModel');
const router=express.Router();





router.put('/formDataBasic/:id', async(req, res)=>{
    //console.log(req.body);`
    req.card= await Card.findById(req.params.id)
    let card=req.card
    
    card.businessName= req.body.businessName
    card.businessLogo= req.body.businessLogo

    card.name= req.body.name
    card.qualification= req.body.qualification
    card.designation= req.body.designation
    card.profile= req.body.profile

    card.phoneNo= req.body.phoneNo
    card.whatsappNo= req.body.whatsappNo
    card.email= req.body.email

    card.address= req.body.address
    card.locationLink= req.body.locationLink
    card.websiteLink= req.body.websiteLink
    
    try{
        card=  await card.save();
        // some things changed here.
        res.render("./editViewsFolder/editBasic",{card:card});
    }
    catch (error) {
        console.log(error);
        res.redirect("/formSubmissions/formDataBasic/${card.id", {card:card});
      }
});


module.exports = router;