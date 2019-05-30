import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';
import models from '../../db/models';
import env from '../../environment/env'


export class AuthController {
  static async localAuth(req, res){
    const {body: {username, email, password}} = req;

    try {
      const user = await models.User.findOne({where: {email: email}});
      if(!user) {
        const hashedPassword = passwordHash.generate(`${password}`);
        const payload = {username, email };
        await models.User.create({
          username:username,
          email: email,
          password: hashedPassword
        });
        res.status(201).json({
          success: true,
          message: 'You have successfully created an account',
          token: jwt.sign(payload, env.secretKey)
        })
      }
      else {
        res.status(409).json({
          success: false,
          message: 'Email used already exists'
        })
      }
    }catch (e) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong! Please try again'
      })
    }
  }
};