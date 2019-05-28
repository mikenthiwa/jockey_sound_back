import http from 'http';
import app from './src/App'
import env from './src/environment/env';


const server = http.createServer(app);
server.listen(env.port, () => {
  console.log(`I am listening to port ${env.port}`)
});
