const {Sequelize}=require('sequelize')

const config=require('../../configs.js')

const db=new Sequelize(config.db.development)

module.exports=db