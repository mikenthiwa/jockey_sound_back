import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));



app.use('*', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Not Found, this route does not exist'
  })
});

export default app

