const Comment = require('../models/comment.model');



class CommentController {
    static create = async (req, res) => {
        try {
            const { content } = req.body;

            const comment = await Comment.create({
                content
            });

            res.status(201).json(comment)
        } catch(error) {
            res.status(500).json('Server error')
        }
    }

    static getAll = async (req, res) => {
        try {
            // const query = req.query;
            // console.log(query)
            const comment = await Comment.find();

            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json('Server error') 
        }
    }

    static getOne = async (req, res) => {
        try {
            const { id } = req.params

            const comment = await Comment.findOne({_id : id})

            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json('Server error') 
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params
            const { content } = req.body;

            if(!id){
                return res.status(404).json('Post not found')
            }
            const comment = await Comment.findOne({ _id : id})
            const updatedComment = Object.assign(comment, content)

            updatedComment.save()
            
            res.status(200).json(updatedComment)
        } catch (error) {
            res.status(500).json('Server error')
        }
    }
    
    static delete = async (req, res) => {
        try {
            const { id } = req.params

            if (!id) {
                return res.status(400).json('Invalid request')
            }

            const comment = await Comment.findByIdAndDelete({_id : id})

            if (!post) {
                return res.status(404).json('Post not found')
            }
    
            res.status(200).json('success')


        } catch (error) {
            res.status(500).json('Server error')
        }
    }
    
}

module.exports = CommentController;