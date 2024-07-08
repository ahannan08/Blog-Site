const User = require("../model/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


exports.register = async(req,res)=>{

    try{
        const user = new User(req.body);
        await user.save()
        res.status(201).send({user})
        console.log("new user register")
        
        
    }
    catch (error){
        res.status(400).send(error)
    }

}

exports.login = async(req,res)=>{

    try{
        const {username, password} = req.body;
        const user = await  User.findOne({username})

        if(!user || !(await bcrypt.compare(password, user.password))){
            throw new error ("incorrect credentials")
        }

        //if success, generate a token
        const token = jwt.sign({_id:user._id}, 'secret')
        res.send({user,token})
        console.log("user logged in")


    }
    catch(error){
        res.status(400).send(error)
        console.log("cant implement login")
    }
}