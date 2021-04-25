const mongoose = require("mongoose");  //몽구스 요청

subscriberSchema = mongoose.Schema({
    name : String,
    email : String,
    zipCode : Number
}); //스키마 특성 정의

module.exports = mongoose.model("Subscriber", subscriberSchema);