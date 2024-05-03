// const bcrypt = require("bcrypt");
// const {isEmail} = require("validator");
// const User = require("../models/User");
// const saltRounds = 10

// const validateSignUpData = async(req,res)=>{
//     const {name, email, password}= req.body;

//     if(name.trim().length === 0){
//         res.status(400).json({message :"please enter a name"})
//         return false
//     }
//     if(!isEmail(email)){
//         res.status(400).json({message: "please enter a valid email"});
//         return false;
//     }
//     if(password.trim().length === 0){
//         res.status(400).json({message:"please enter a password"});
//         return false;
//     }else if(password.trim.length<=5){
//         res.status(400).json({message:"minimum length is 6"});
//         return false;
//     }

//     const existingUser = await User.findOne({ email }).exec();
//     if(existingUser){
//         res.status(400).json({message : "email already exist"});
//         return false;
//     }
//     return true;
// };
// module.exports = async (req, res)=>{
//     const {name, email, password}= req.body;
//     const isValid = await await validateSignUpData(req, res);
//     if(isValid){
//         try {
//             const hashedPass = await bcrypt.hash(password, saltRounds)
//             const user = await User.create({ name, email, password:hashedPass});
//             res.json({
//                 message:"Account Created Sucessfully",
//                 user:{_id:user._id, name: user.name, email: user.email}
//             })

//         } catch (error) {
//             console.log(error)
//         }
//     }
// }


const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const User = require("../models/User");

const saltRounds = 10;

const validateSignupData = async (req, res) => {
  const { name, email, password } = req.body;

  if (name.length === 0) {
    res.status(400).json({ message: "Please Enter a Name" });
    return false;
  }

  if (!isEmail(email)) {
    res.status(400).json({ message: "Please Enter a valid email" });
    return false;
  }

  if (password.length === 0) {
    res.status(400).json({ message: "Please Enter password" });
    return false;
  } else if (password.length <= 5) {
    res
      .status(400)
      .json({ message: "Minimum passwor length is 6 characters" });
    return false;
  }

  // check if email exists in DB!
  const existingUser = await User.findOne({ email: email }).exec();
  if (existingUser) {
    console.log("Email Already Registered");
    res.status(400).json({ message: "Email Already Registered" });
    return false;
  }

  return true;
};

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  // Validate Inpu
  const isValid = await validateSignupData(req, res);
  if (isValid) {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({ name, email, password: hashedPassword });

      return res.json({
        message: "Account Created Successfully",
        user: { _id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }
};