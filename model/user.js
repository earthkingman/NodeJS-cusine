const mongoos = require("mongoose");
const Subscriber = require("./subscriber");
const Course = require("./course");

const userSchema = mongoose.Schema(
    {
        name: {
            first_name: {
                type: String,
                required: true,
                trim: true,
            },
            last_name: {
                type: String,
                required: true,
                trim: true,
            },
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            street: {
                type: String,
                required: true,
                trim: true,
            },
            city: {
                type: String,
                required: true,
                trim: true,
            },
            state: {
                type: String,
                required: true,
                trim: true,
            },
            zip: {
                type: Number,
                required: true,
            },
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        subscriberAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Subscriber,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Course,
            },
        ],
    },
    {
        timestamp: true
    }
);
module.exports = mongoos.model("User", userSchema);