const {Cours} = require('../models/module')
const ApiError = require('../error/ApiError')
class CoursControler{
    async createCours(req,res){
       
        const {logo,links} = req.body
        const coursnm = await Cours.create({logo,links})
        return res.json(Cours)
      
     }
     async GetCours(req,res){

      const cours = await Cours.findAll()
      return res.json(cours)
     }
     async GetOneCours(req,res){
        const {logo} = req.body
       const cours = await Cours.findAll({where:{logo}})
       return res.json(cours)
     }

}

module.exports = new CoursControler()