import express from 'express';
import {AuthController} from "./AuthController";
import {validate} from "../../middlewares/authValidator";

const router = express.Router();

router.post(
  '/register',
  ...validate('register'),
  AuthController.localAuth
);

export default router