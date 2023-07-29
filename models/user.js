import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exist"],
  },
  username: {
    type: String,
    required: [true, "username ia required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!", // ReGEX
    ],
  },
  image: {
    type: String,
  },
});

const User = models.user || model("user", UserSchema);
export default User;
