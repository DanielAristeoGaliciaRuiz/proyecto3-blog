const Posts = require('../models/posts.models')
const postsControllers=require('./posts.controllers.js')

const getAllPosts=(req,res)=>{
    postsControllers.findAllPosts()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

const getPostById=(req,res)=>{
    const id=req.params.id

    postsControllers.findPostById(id)
    .then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({
                message:'Invalid Id'
            })
        }
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

const postNewPost=(req,res)=>{
    const postObj=req.body

    postsControllers.createPost(postObj)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

const patchPost=(req,res)=>{
    const id=req.params.id
    const postObj=req.body
    postsControllers.updatePost(id,postObj)
    .then(data=>{
        if(data[0]){
            res.status(202).json({
                message:`Product whit id:${id} updated succesfully`
            })
        }else{
            res.status(404).json(data)
        }
    })
    .catch(err=>{
        res.status(404).json(err)
    })
}

const deletePost=(req,res)=>{
    const id=req.params.id

    postsControllers.deletePost(id)
    .then(data=>{
        if(data){
            res.status(204).json()
        }else{
            res.status(404).json({
                message:'Product not found'
            })
        }
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

module.exports={
    getAllPosts,
    getPostById,
    postNewPost,
    deletePost,
    patchPost
}