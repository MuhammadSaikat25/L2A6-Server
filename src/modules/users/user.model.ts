import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    address: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  },
});

export const Users = model<TUser>("User", userSchema);
