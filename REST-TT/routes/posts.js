const express = require("express")
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const finePosts = await Post.find()
        res.json(finePosts)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        connect: req.body.connect
    })
    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const findPost = await Post.findById(req.params.postId)
        res.json(findPost)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json(updatePost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router