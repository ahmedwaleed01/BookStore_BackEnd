const express = require('express');
const books = require('../Models/book')
const reviews = require('../Models/review');
const users = require('../Models/user');
const router = express.Router();

router.post('/review',async(req,res)=>{
    const {ISBN,comment} = req.body;
    if( ISBN && comment){
        const book = await books.find({ISBN});
        const username=req.user.data.username;
        const userfilter= await users.findOne({username});
        const newReview = new reviews({
            book: book._id,
            user:userfilter._id,
            comment:comment
        })
        try{
            console.log("firs")
            const a= await newReview.save();
            res.status(200).json({message:"Successfully added a review"})

        }catch(err){
            res.send(404).json({message:"error saving review"})
        }
    }
    else{
        return res.status(404).json({message:"unable to add review"});
    }
})

router.put('/review/:ISBN',async(req,res)=>{
    const {ISBN} = req.params.ISBN;
    const bookFilter= await books.find({ISBN});
    const book= bookFilter._id;
    const username=req.user.data.username;
    const userfilter= await users.findOne({username});
    const user=userfilter._id
    const review= await reviews.findOne(({book,user}));
    if(review){
        const newComment= req.body.comment;
        if(newComment){
            try{
                review.set({comment: newComment});
                const a = await review.save();
                res.status(200).json({message: "review is updated successfully!"})
            }
            catch(err){
                res.status(404).json({message: "error in saving!"});
            }

        }else{
            res.status(404).json({message: "body is empty!"});
        }
    }else{
        res.status(404).json({message: "No review is found"});
    }
})

router.delete('/review/:ISBN',async(req,res)=>{
    const {ISBN} = req.params.ISBN;
    const bookFilter= await books.find({ISBN});
    const book= bookFilter._id;
    const username=req.user.data.username;
    const userfilter= await users.findOne({username});
    const user=userfilter._id
    const review= await reviews.findOne(({book,user}));
    if(review){
        reviews.deleteOne({ book: book, user: user })
        .then(function() {
            res.status(200).json({ message: "Review successfully deleted!" });
        }).catch(function(err){
            res.status(404).json({ message: "Review not found" });
        })
    }else{
        res.status(404).json({message: "No review is found"});
    }

})
module.exports = router;