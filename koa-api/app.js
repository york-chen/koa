const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');//这个中间件是为了post请求的时候获取body里面的参数
const json = require('koa-json');

const loginRouter = require('./routes/login');

app.use(bodyParser(
    {enableTypes: ['json', 'form', 'text']}
));
app.use(json());
app.use(loginRouter.routes(), loginRouter.allowedMethods());
app.listen(3100);

console.log('程序已经启动在3100端口');