require('dotenv').config()

const config={
    api:{
        nodeEnv:process.env.NODE_ENV,
        port:process.env.PORT,
        host:process.env.HOST
    },
    db:{
        development:{
         dialect:'postgres',
         host:'localhost',
         port:5432,
         username:'postgres',
         password:process.env.POSTGRES_PASSWORD,
         database:'blog_db',
        define:{
            timestamps:true,
            underscored:true,
            underscoredAll:true
        }
        },
        test:{},
        production:{}
    }
}

module.exports=config