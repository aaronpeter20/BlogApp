const express = require('express');
const router = express.Router();
const blogModel = require('../model/blogData');
router.use(express.json())
const jwt= require('jsonwebtoken')

function verifytoken(req,res,next){
    let token= req.headers.token
    try{
        if(!token) throw 'Unauthorized access';
        else{
            let payload= jwt.verify(token,'secret')
            if(!payload) throw 'Unauthorized access';
            next()
        }
    }catch(error){
        console.log(error)
    }
}

router.get('/',  async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Add a new blog
router.post('/add',verifytoken, async (req, res) => {
    try {
        const newBlog = new blogModel(req.body);
        await newBlog.save();
        res.status(201).send(newBlog);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update an existing blog
router.put('/edit/:id',verifytoken, async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send('Update unsuccessful');
    }
});

// Delete a blog
router.delete('/delete/:id',verifytoken, async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
