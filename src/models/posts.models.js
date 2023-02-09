const {DataTypes}=require('sequelize')

const db=require('../utils/database.js')

const Posts = db.define('posts',{
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isPublished:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

module.exports = Posts

// "id" :1,
// 	"content": "This is my post content :D!",
// 	"userName": "I'a Sahid, the author of this post!",
// 	"isPublished": true