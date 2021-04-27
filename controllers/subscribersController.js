const Subscriber = require("../model/subscriber");

const getSubscriberParams = (body) => {
    return {
        name: body.name,
        email: body.email,
        zipCode: parseInt(body.zipCode)
    };
}

module.exports = {
    index: (req, res, next) => {
        console.log("index");
        Subscriber.find()
            .then((subscribers) => {
                res.locals.subscribers = subscribers;
                next();
            })
            .catch(error => {
                console.log(`Error fetching subscribers : $ {error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("subscribers/index");
    },

    new: (req, res) => {
        res.render("subscribers/new");
    },

    create: (req, res, next) => {
        let subscriberParams = getSubscriberParams(req.body);
        Subscriber.create(subscriberParams)
          .then(subscriber => {
            res.locals.redirect = "/subscribers";
            res.locals.subscriber = subscriber;
            next();
          })
          .catch(error => {
            console.log(`Error saving subscriber: ${error.message}`);
            next(error);
          });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) 
            res.redirect(redirectPath);
        else 
            next();
    },

    show: (req, res, next) => {
        var subscriberId = req.params.id;
        Subscriber.findById(subscriberId)
            .then((subscriber) => {
                res.locals.subscriber = subscriber;
                next();
            })
            .catch(error => {
                console.log(`Error fetching subscriber by ID: ${error.message}`)
                next(error);
            })
    },

    showView: (req, res) => {
        res.render("subscribers/show");
    },

    edit: (req, res, next) => {
        console.log("edit");
        let subscriberId = req.params.id;
        Subscriber.findById(subscriberId)
            .then(subscriber => {
                res.render("subscribers/edit", {
                    subscriber: subscriber
                });
            })
            .catch(error => {
                console.log(`Error fetching subscriber by ID: ${error.message}`)
                next(error);
            })
    },

    update : (req, res, next) => {
        console.log("update");
        let subscriberId = req.params.id;
        subscriberParams = getSubscriberParams(req.body);
        Subscriber.findByIdAndUpdate(subscriberId, {
            $set: subscriberParams
        })
        .then((subscribers)=> {
            res.locals.redirect = `/subscriber/${subscriberId}`;
            res.locals.subscriber = subscribers;
            next();
        })
        .catch(error => {
            console.log(`Error fetching subscriber by ID: ${error.message}`)
            next(error);
        })
    },
    delete : (req, res, next) => {
        let subscriberId = req.params.id;
        Subscriber.findByIdAndRemove(subscriberId)
        .then(()=>{
            console.log("성공");
            res.locals.redirect = "/subscribers";
            next();
        })
        .catch(error => {
            console.log("실패");
            console.log(`Error fetching subscriber by ID: ${error.message}`)
            next(error);
        })
    }
};