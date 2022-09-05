import events from "../models/Event.js";
import categories from "../models/category.js";
import category from "../models/category.js";

export const createEvents = async (req,res)=>{
    const {event_name, event_title ,address_line,address_country,street,state,city,postCode,category_Id,tag_id,start_time,end_time,country_id,description,phone,email,website,social_media,logo,image} = req.body;

    console.log(req.body);

    if(!event_name || !event_title || !address_line || !address_country || !street|| !state || !city || !postCode || !category_Id || !tag_id ||!start_time || !end_time || !country_id || !description || !phone || !email || !website || !social_media || !logo || !image){
        res.status(422).json("plz fill the data");
    }

    try {
        const eventName = await events.findOne({event_name:event_name,});
        const eventCountry = await events.findOne({country_id:country_id});
        const startTime = await events.findOne({start_time:start_time});
        const endTime = await events.findOne({end_time:end_time});

        if(eventName && eventCountry && startTime && endTime) {
            res.status(422).json("this is event is already present");
        }else{
            const addEvent = new events({
                event_name, 
                event_title ,
                address:[{address_line,address_country, street, state,city, postCode}] ,
                category_Id,
                tag_id,
                startandend: {time:{start_time, end_time}},
                country_id,
                description,
                contacts:[{email,phone,website,social_media}],
                logo,
                image
            });
            await addEvent.save();
            res.status(201).json({
              status:{
                error:false,
                code:200,
                type: "success",
                message: "Success",
                data: addEvent
              },
            });
            console.log(addEvent);
        }

    } catch (error) {
        res.status(422).json(error);
    }
}

export const updateEvents = async (req, res, next) => {
    if (req.params.id) {
      try {
        const updateEvent = await events.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({
          status:{
            error: false,
            code :200,
            type: "success",
            message: "successfully updated"
          }
        });
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can update only your account!"));
    }
  };

  export const getEvent = async (req, res, next) => {
    try {
      const event = await events.findById(req.params.id);
      // console.log(event.category_Id);
      await event.category_Id.map((category)=>{
        const categoryId = categories.find({_id: category});
        console.log(categoryId.categoryName);
        // const category_name = categories.aggregate([{ $match: { _id: category } }]);
        // console.log(category_name);
      })

      
      
      res.status(200).json({
        status:{
          error:false,
          code:200,
          type:"success",
          message:"Success"
        },
        data:event
      });
    } catch (err) {
      next(err);
    }
  };

  export const deleteEvents = async (req, res, next) => {
    if (req.params.id) {
      try {
        await events.findByIdAndDelete(req.params.id);
        res.status(200).json({
          status:{
            error: false,
            code:200,
            type:"success",
            message: "successfully deleted"
          }
        });
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can delete only your account!"));
    }
  };