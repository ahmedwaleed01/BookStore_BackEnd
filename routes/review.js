const express = require('express');
const books = require('../Models/book')
const reviews = require('../Models/review')
const router = express.Router();


router.get('/:ISBN',async(req,res)=>{
    const ISBN = req.params.ISBN
    const book= await books.find({ISBN});
    const bookId= book._id;
    const review= await reviews.find(({bookId}));
    if(review){
        res.send(review).status(200);
    }else{
        res.json({message: 'Not Found.'}).status(404);
    }
})

module.exports = router;