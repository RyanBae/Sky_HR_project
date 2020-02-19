const mongoose = require('mongoose');
const mSchema = mongoose.Schema;



const userSchema = new mSchema({
    id: {type: String, required: true},
    password: {type: String, required: true},
    userName: {type: String, required: true},
    phone: {type: String, required: true},
    age: {type: Number, required: true},
    store:{type: String, required: true},
    position: {type: String, required: true},
    createDate : {type: Date, default: new Date()}
});


// module.exports = (connectionPool) => {
//     let model = connectionPool.model('User', userSchema);
//     return model
// };


module.exports = (connectionPool) => {
    let model = connectionPool.model('user', userSchema);
    return model;
};