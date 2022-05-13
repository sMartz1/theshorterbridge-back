const { connect } = require('mongoose');

const connection = async()=>{
    const db = await connect(process.env.MONGO_URL);
    console.log('DB connected to ',db.connection.name)
}


module.exports = {
    connection
}
