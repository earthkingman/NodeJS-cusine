const mongoose = require("mongoose");  //몽구스 요청

subscriberSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        zipCode: {
            type: Number
        },
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
    }, {
    timestamps: true
}); //스키마 특성 정의

subscriberSchema.method.getInfo = function () {  //구독자들의 name, email, zipCode를 한줄로 빠르게 가져오기 위해 구독자 스키마에 추가되는 인스턴스 메소드
    return `Name: ${this.name} Email: ${this.email}
        Zip Code: ${this.zipCode}`;
};

module.exports = mongoose.model("Subscriber", subscriberSchema); // 정말 신기한게 db에는 도큐먼트가 Subscriber가 아니고 Subscribers 복수형으로 생김