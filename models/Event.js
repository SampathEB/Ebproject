import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: [true, 'event name required'],
        max: [6, 'message']
    },
    event_title: {
        type: String,
        required: [true, 'event title required'],
        max: [6, 'message']
    },
    address: [{
        address_line: {type: String, max: [6, 'message'], required: [true, 'event address line required']},
        address_country:{type: String, max: [6, 'message'], required: [true, 'event address line required']},
        street: {type: String, max: [6, 'message'],required: [true, 'event street required']},
        state: {type: String, max: [6, 'message'],required: [true, 'event state required']},
        city: { type: String ,required: [true, 'event city required']},
        postCode: {type: Number,required: [true, 'event postCode required']}
    }],
    category_Id:[{type: String, required: [true, ' event country required']}],
    tag_id:[{type: String, required: [true, ' event tags required']}],
    startandend: {
        time:{
            start_time: { type: Date, default: Date.now ,required: [true, 'start time required']},
            end_time: { type: Date, default: Date.now ,required: [true, 'event end time required']}
        },
        // time_zone:time
    },
    country_id:[{type: String, required: [true, ' event country required']}],
    description: {
        type: String,
        required: [true, ' event description required'],
        max: [6, 'message']
    },
    contacts:[{
        phone: {
            type: String,
            required: [true, ' phone number required']
          },
        email: {type:String, required: [true, 'email address required']},
        website: String,
        social_media: String,
    }],
    logo: {type: String},
    image: [{type: String}]
});

export default mongoose.model("events", eventSchema);



