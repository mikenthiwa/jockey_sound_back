import {check, validationResult} from 'express-validator/check';
import _ from 'lodash';

const rules = (field) => {
  switch(field){
    case 'email':
      return check(field)
        .exists().withMessage(`${_.upperFirst(field)} field is required`)
        .not().isEmpty().withMessage(`${_.upperFirst(field)} is missing`)
        .trim()
        .isLowercase().withMessage(`${_.upperFirst(field)} should be lowercase`)
        .isEmail().withMessage(`${_.upperFirst(field)} is not valid`);
    case 'password':
      return check(field)
        .exists().withMessage(`${_.upperFirst(field)} field is required`)
        .not().isEmpty().withMessage(`${_.upperFirst(field)} is missing`)
        .trim()
        .isLength({min: 8}).withMessage(`${_.upperFirst(field)} contains characters less than 8`);
    default:
      return check(field)
        .exists().withMessage(`${_.upperFirst(field)} field is required`)
        .not().isEmpty().withMessage(`${_.upperFirst(field)} is missing`)
        .trim()
  }
};


const body = {
  register: [
    rules('username'),
    rules('email'),
    rules('password')
  ]
};

export const validate = (bodyType) => {
  return [
    body[bodyType],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      next()
    }
  ]
};