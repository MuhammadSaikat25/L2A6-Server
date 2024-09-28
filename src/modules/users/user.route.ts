import { Router } from "express";
import { userController } from "./user.controller";
import { validation } from "../../middelware/validation";
import { userCreateValidation } from "./user.validation";
import { authValidation } from "../../middelware/auth";

const route = Router();

route.post(
  "/signup",
  validation(userCreateValidation),
  userController.createUser
);

export const userRoute = route;
