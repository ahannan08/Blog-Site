const Post = require('../model/Post.js');


exports.getAllPost = async(req,res)=>{

    try{
        const posts = await Post.find()
        res.send(posts)

    }
    catch(error){
        res.status(500).send(error)
    }


}


exports.getPostById = async(req,res)=>{

    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(404).send()
        }
        res.send(post)
    }
    catch(error){
        res.status(500).send()
    }

}

exports.createPost = async(req,res)=>{

    try{
        const post = new Post({
           ... req.body,
            author: req.user._id
        })
        await post.save()
        res.status(201).send(post)
    }
    catch(error){
        res.status(400).send(error)
    }
}

exports.updatePost = async(req,res)=>{

    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
        })
        if(!post){
            return res.status(404).send()
        }
        res.send(post)
    }
    catch(error){
        return res.status(400).send(error)
    }


}

exports.deletePost = async(req,res)=>{

    try{
        const post = await Post.findByIdAndDelete(req.param.id)
        if(!post){
            return res.status(201).send()
        }
        res.send("POST DELETED")
    }

    catch(error){
        return res.status(400).send(error)
    }

}

