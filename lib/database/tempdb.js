  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝗔𝗛𝗠𝗔𝗗_𝗠𝗗"},
    creator: { type: String, default: "𝗔𝗛𝗠𝗔𝗗" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
