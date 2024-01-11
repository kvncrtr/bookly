import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/login", [
   check("email", "Email is required").isEmail(),
   check("password", "Password needs to be 6 characters or longer").isLength({ min: 6 })
], async (req: Request, res: Response) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) res.sendStatus(400).json({ messgae: errors.array() });
   
   const { email, password } = req.body;

   try {
      const user = await User.findOne({ email })
      if (!user) res.status(400).json({ message: "Invalid credentials" });
      
      const isMatch = bcrypt.compare(password, user.password)
      
   } catch(error) {
      console.log(error);
      res.status(500).json({ message: "Somthng went wrong" });
   }
})