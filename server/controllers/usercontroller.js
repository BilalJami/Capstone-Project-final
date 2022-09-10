// login user 

const loginUser = async (req, res) => {
    res.json({msg:'login user'})
}


// Signup user 

const SignupUser = async (req, res) => {
    res.json({msg:'Signup user'})
}


module.exports = {loginUser, SignupUser}