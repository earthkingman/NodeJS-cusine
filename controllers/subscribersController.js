const subscriber = require("../model/subscriber");
const Subscriber = require("../model/subscriber");

exports.getAllSubscribers = (req, res, next)=> {
    Subscriber.find({}, (error, subscribers)=> {
        if (error) next(error);
        req.data = subscribers;
        next();
    });
};