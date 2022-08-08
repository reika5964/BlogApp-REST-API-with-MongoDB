const mongroose = require("mongoose");

    const CategorySchema = new mongroose.Schema(
        {
            name:{
                type:String,
                required:true,
            },
        },
    { timestamps: true}
    );

   module.exports = mongroose.model("Category",CategorySchema) 