const mongoose = require('mongoose');
const { Schema } = mongoose;

const communitySchema = new Schema({
  userName: {
    type: String
  },
  contentsTitle: {
    type: String
  },
  contentsText: {
    type: String,
  },
  goodPoint: {
    type: Number
  }
},
{
  timestamps: true
});

module.exports = mongoose.model('Community', communitySchema);