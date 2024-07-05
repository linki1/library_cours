
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User_ = sequelize.define('user',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique:true},
    pasword:{type: DataTypes.STRING},
    CoursId:{type:DataTypes.STRING, unique:true}
})

const Cours = sequelize.define('cours',{
    id:{type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    logo:{type: DataTypes.STRING, unique:true},
})

const Userstorage = sequelize.define('Userstorage',{
    userID:{type: DataTypes.INTEGER, unique:true},
    idcours:{type:DataTypes.INTEGER, unique:true}
})

// const StorageCours = sequelize.define('StorageCours', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

User_.hasOne(Userstorage)
Userstorage.belongsTo(User_)

Userstorage.hasMany(Cours)
Cours.belongsTo(Userstorage)


module.exports = {
    User_,
    Cours,
    Userstorage,
   
}