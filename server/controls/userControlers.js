const ApiError = require('../error/ApiError')
const { json } = require("sequelize")
const bcrypt = require('bcrypt')
const {User_} = require('../models/module')
const {Userstorage} = require('../models/module')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email) => {
  return jwt.sign(
      {id, email,},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  )
}

class Usercontrolers{
     async registration(req,res,next ){
      
      const {email, password, } = req.body
      if (!email || !password) {
          return next(ApiError.badRequest('Некорректный email или password'))
      }
      const candidate = await User_.findOne({where: {email}})
      if (candidate) {
          return next(ApiError.badRequest('Пользователь с таким email уже существует'))
      }
      
      const user = await User_.create({email,pasword: password })
      const token = generateJwt(user.id, user.email,)
      return res.json({token})
     }

     async login(req,res, next ){
      const {email, password} = req.body
      const user = await User_.findOne({where: {email}})
      console.log(user.dataValues.pasword)
      console.log(password)
      if (!user) {
          return next(ApiError.internal('user not found'))
      }
    
      let comparePassword = password == user.dataValues.pasword;
      if (!comparePassword) {
          return next(ApiError.internal('pasword incorevt'))
      }
      const token = generateJwt(user.id, user.email)
      return res.json({token})
     }

     async check(req,res,next){
       const token = generateJwt(req.user.id, req.user.email)
      return res.json({message:'all right'})
     }
     async checkList(req, res, next) {
      const { crid, email } = req.body;
      console.log(crid)
      console.log(email)
      try {
       
        await User_.update({ CoursId: crid}, { where: { email: email} });
       let user = User_.findAll({where:{email: email}})
       console.log(user);

        res.json({ message: 'User updated successfully!' });
      } catch (error) {
        next(ApiError.badRequest('Failed to update user'));
      }
    }
    async getCoursId(req,res,next){
      const { email } = req.body; // Извлечь ID из параметров запроса
      
      try {
        const user = await User_.findOne({ where: { email } }); // Найти пользователя по ID
  
        if (!user) {
          return next(ApiError.badRequest('User not found'));
        }
  
        return res.json(user.CoursId); // Вернуть информацию о пользователе
      } catch (error) {
        next(ApiError.badRequest('Failed to fetch user'));
      }
    }
  }



module.exports = new Usercontrolers()