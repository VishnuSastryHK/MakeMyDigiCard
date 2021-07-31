const express=require('express');
const Card=require('./../models/cardModel');
const router=express.Router();

router.get("/", async(req,res)=>{
    let card=new Card({
        businessName: "xyz",
        businessLogo: "",

        name: "ABC",
        qualification: "",
        designation: "",
        profile: "",

        phoneNo: "",
        whatsappNo: "",
        email: "",

        address: "",
        locationLink: "",
        websiteLink: "",
    });
     
    try{
        card= await card.save();
        console.log(card.id);
        res.render('./editViewsFolder/editBasic', {card: card});
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;

