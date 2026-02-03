const mongooes=require('mongoose');

const connectDatabase=()=>{
    mongooes.connect(process.env.DB_URL).then((con) => {
        console.log("Database connected successfully to host:"+con.connection.host);
    })
};

module.exports=connectDatabase;