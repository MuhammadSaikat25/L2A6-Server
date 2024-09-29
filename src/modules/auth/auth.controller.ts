import { RequestHandler } from "express";
import { authService } from "./auth.service";

const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await authService.loginUser(req.body);
    console.log(req.body);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "login successful",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
};

export const authController = {
  loginUser,
};
