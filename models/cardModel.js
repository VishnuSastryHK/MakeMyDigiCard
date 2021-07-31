const mongoose=require('mongoose');
//const slug = require('mongoose-slug-generator');

//initialize slug
//mongoose.plugin(slug);
const cardSchema = new mongoose.Schema({
  businessName: {
    type: String,
  },
  businessLogo: {
    type: String,
  },
  
  name: {
    type: String,
  },
  name: {
    type: String,
  },
  qualification: {
    type: String,
  },
  designation: {
    type: String,
  },
  profile: {
    type: String,
  },
  
  phoneNo: {
    type: String,
  },
  whatsappNo: {
    type: String,
  },
  email: {
    type: String,
  },
  
  address: {
    type: String,
  },
  locationLink: {
    type: String,
  },
  websiteLink: {
    type: String,
  },
  
  timeCreated: {
    type: Date,
    default: () => Date.now(),
  },
  
  //slug: { type: String, slug: 'name', unique: true, slug_padding_size: 2 },
});

module.exports = mongoose.model('cardModel', cardSchema);