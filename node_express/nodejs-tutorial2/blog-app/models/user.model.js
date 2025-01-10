const { Schema, model } = require("mongoose");
const {createHmac , randomBytes} = require("crypto");
const {createTokenForUser} = require("../services/authentication.service.js");
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },
    profileImageUrl: {
      type: String,
      default: "/images/user.png",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function(next){
  const user = this;

  if(!user.isModified('password')) return next(); // if password feilds is unchanged

  const salt = randomBytes(16).toString("hex");

  const hashedPassword = createHmac("sha256" , salt).update(user.password).digest("hex");

  user.salt = salt;
  user.password = hashedPassword;
  next();
});

userSchema.statics.matchPasswordAndGenerateToken = async function(email , password){
  const user = await this.findOne({email});
  if(!user) throw new Error("No such user found");

  const salt = user.salt;
  const hashedPassword = user.password;

  const hashedProvidedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if(hashedPassword !== hashedProvidedPassword){
    throw new Error("Incorrect password");
  }

  const token = createTokenForUser(user);
  return token;
}

const User = model("user", userSchema);

module.exports = User;
