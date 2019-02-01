const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');

const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');

//程序异常处理
app.use(async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.throw(404);
        }
    } catch (err) {
        console.error(err.stack);
        const status = err.status || 500;
        ctx.status = status;
        if (status === 404) {
            await ctx.render("index");
        } else if (status === 500) {
            await ctx.render("index");
        }
    }
});
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
    extension: 'pug'
}));


// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

module.exports = app;
