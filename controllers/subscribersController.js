const subscriber = require("../model/subscriber");

exports.getAllSubscribers = (req, res) => {
    Subscriber.find({})
        .exec()  //find에서 exec 호출을 통해 프라미스를 돌려주기 위한 쿼리를 수행하는것
        .then((subscriber) => {
            res.render("subscribers", { subscriber: subscriber });
        }) //데이터베이스로부터 결과 제공
        .catch((error) => { // 프라미스에서 리젝트된 에러들을 캐치
            console.log(error.message);
            return [];
        })
        .then(() => {  //프라미스 체인의 종료와 메세지 로깅
            console.log("promise complete");
        });
};

exports.getSubscriptionPage = (req, res) => {
    res.render("contact");
}

exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
        .then(() => {
            res.render("thanks");
        })
        .catch(error => {
            res.send(error);
        });
}