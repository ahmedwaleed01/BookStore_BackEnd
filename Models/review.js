const mongoose =require ("mongoose")

const reviewSchema = new mongoose.Schema({
    book: {type: mongoose.Schema.Types.ObjectId, ref:'book'},
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    comment:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('review',reviewSchema);