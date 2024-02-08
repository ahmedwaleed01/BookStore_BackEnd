const mongoose =require ("mongoose")

const bookSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: true,
    },
    ISBN:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('book',bookSchema);