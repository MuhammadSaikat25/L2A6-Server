import { Router } from "express";
import { userController } from "./user.controller";
import { validation } from "../../middelware/validation";
import { userCreateValidation } from "./user.validation";
import { authValidation } from "../../middelware/auth";
import { authController } from "../auth/auth.controller";

const route = Router();

route.post(
  "/signup",
  validation(userCreateValidation),
  userController.createUser
);
route.post("/auth/login", authController.loginUser);
export const userRoute = route;
