const express = require('express');
const books = require('../Models/book')
const router = express.Router();


router.get('/:ISBN',async(req,res)=>{
    const ISBN = req.params.ISBN
    const book= await books.find({ISBN});
    if(book){
        res.send(book).status(200);
    }else{
        res.json({message: 'Not Found.'}).status(404);
    }
})

router.get('/authorName/:authorName',async(req,res)=>{
    const authorname = req.params.authorName
    console.log(authorname)
    const book= await books.find({authorName:authorname});
    if(book){
        res.send(book).status(200);
    }else{
        res.json({message: 'Not Found.'}).status(404);
    }
})

router.get('/title/:title',async(req,res)=>{
    const title = req.params.title
    const book= await books.find({title});
    if(book){
        res.send(book).status(200);
    }else{
        res.json({message: 'Not Found.'}).status(404);
    }
})
// add book 
router.post("/",async(req,res)=>{
    const { authorName,ISBN,title } = req.body;
    if(authorName && ISBN && title){
        const book= new books({
            authorName:authorName,
            ISBN:ISBN,
            title:title
        })
        try{
            const a= await book.save();
            res.status(200).json({message:"Successfully added a book"})

        }catch(err){
            res.send(404).json({message:"error saving book"})
        }
    }
    else{
        return res.status(404).json({message:"unable to add book"});
    }
})

router.get('/',async(req,res)=>{
    const book= await books.find({});
    if(book){
        return res.status(200).send(book);
    }else{
        return res.status(200).json({message: 'No Books in the store.'})
    }
})

module.exports= router;