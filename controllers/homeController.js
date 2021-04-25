var courses = [
    {
        title : "Event Driven Cakes",
        cost : 50
    },
    {
        title: "Asynchronous Arichokre",
        cost : 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost : 10
    }
];

exports.showCourse = (req, res)=>{
    res.render("courses", {offeredCourses: courses});
}

exports.showSignUp = (req, res)=>{
    res.render("contact");
}
exports.postedSignUpForm = (req, res)=>{
    res.render("thanks");
}