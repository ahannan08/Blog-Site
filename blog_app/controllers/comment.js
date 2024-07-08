
const Comment = require('../model/Comment');

exports.getComments = async(req,res)=>{
    try{
        const comments = await Comment.findAll({post:req.params.postId})
        await comments.save()
        res.send(comments)
    }
    catch(error){
        res.status(500).send(error)
    }

}


exports.addComment = async(req,res)=>{

    try{
        const comment = new Comment({
            ...req.body,
           author: req.user._id,
            post: req.params.postId
        })
         //why do we save
         await comment.save()
         res.send(comment)

    }
    catch(error){
        res.status(400).send(error)
    }

}

exports.deleteComment = async(req,res)=>{

    try{
        const comment = await Comment.findByIdAndDelete(req.params.id)
        if(!comment){
            return res.status(404).send()
        }
        res.send(comment)
        console.log("comment deleted")
    }
    catch(error){
        res.status(400).send(error)
    }

}

