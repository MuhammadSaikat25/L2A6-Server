import jwt from "jsonwebtoken";
import { Users } from "../users/user.model";
import bcrypt from "bcrypt";
import AppError from "../../error/AppError";
import httpStatus from "http-status";

const loginUser = async (playLoad: any) => {
  const user = await Users.findOne({ email: playLoad.email });
  if (!user) {
    const user = await Users.create(playLoad);
    const jwtPlayLoad = {
      email: user?.email,
      role: user?.role,
      _id: user._id,
    };
    const jwtToken = jwt.sign(jwtPlayLoad, process.env.JWT as string, {
      expiresIn: "10d",
    });
    return {
      user,
      jwtToken,
    };
  } else {
    if (playLoad.password) {
      const checkingPassword = await bcrypt.compare(
        playLoad.password as string,
        user?.password as string
      );

      if (checkingPassword == false) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password does not match");
      }
      const jwtPlayLoad = {
        email: user?.email,
        role: user?.role,
        _id: user._id,
      };
      const jwtToken = jwt.sign(jwtPlayLoad, process.env.JWT as string, {
        expiresIn: "10d",
      });
      return {
        user,
        jwtToken,
      };
    }
    const jwtPayload = {
      email: user.email,
      role: user.role,
      _id: user._id,
    };
    const jwtToken = jwt.sign(jwtPayload, process.env.JWT as string, {
      expiresIn: "10d",
    });
    return {
      user,
      jwtToken,
    };
  }
};

export const authService = {
  loginUser,
};
