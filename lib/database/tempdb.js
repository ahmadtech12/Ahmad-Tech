  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝗔𝗛𝗠𝗔𝗗_𝗠𝗗_𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣_𝗕𝗢𝗧"},
    creator: { type: String, default: "𝗔𝗛𝗠𝗔𝗗_𝗠𝗗" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
