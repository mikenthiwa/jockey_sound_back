import request from 'supertest';
import app from '../../App';
import models from '../../db/models';


const user = {
  username: "mikenthiwa",
  email: "kevin.nthiwa@andela.com",
  password: "Bit221510"
};


describe('Authentication ', () => {

  it('should successfully register a user', async (done) => {
    await models.User.destroy({truncate: true, cascade: true });
    request(app)
      .post('/register')
      .send(user)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(err) done();
        expect(res.status).toEqual(201);
        expect(res.body.message).toEqual(
         "You have successfully created an account"
        );
        done();
      });
  });

  it('should return a conflict if there is an existing email',  async (done) => {

    await models.User.create(user);
    request(app)
      .post('/register')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if(err) done();
        expect(res.status).toEqual(409);
        expect(res.body).toEqual({
          "success": false,
          "message": "Email used already exists"
        });
        done();
      })
  });

  it('should throw an error when there are empty fields', (done) => {
    request(app)
      .post('/register')
      .send({
        username: "",
        email: "kevin.nthiwa@andela.com",
        password: "Bit221510"
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if(err) done();
        expect(res.status).toEqual(422);
        expect(res.body.errors).toEqual(
          [
            {
              "location": "body",
              "param": "username",
              "value": "",
              "msg": "Username is missing"
            }
          ]
        );
        done()
      })
  });

});