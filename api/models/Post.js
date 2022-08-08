const mongroose = require("mongoose");

    const PostSchema = new mongroose.Schema(
        {
            title:{
                type:String,
                required:true,
                unique:true
            },
            desc:{
                type:String,
                required:true,
            },
            photo:{
                type:String,
                requird:false,
            },
            username:{
                type:String,
                required:true,
            },
            categories:{
                type:Array,
                required:false,
            }},
    { timestamps: true}
    );

   module.exports = mongroose.model("Post",PostSchema) 