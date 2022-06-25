const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect(`mongodb+srv://krishna:vamsi22
@ecom.xhuom.mongodb.net/?retryWrites=true&w=majority`).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
