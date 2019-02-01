const router = require('koa-router')();
router.prefix('/login');
router.get('/', async (ctx) => {
    // console.log(ctx.query);
    // console.log(ctx.params);
    ctx.response.body = {name: 'york', age: 30};
});
router.post('/signin', async (ctx) => {
    console.log(ctx.request.body);
    ctx.response.body = {name: 'york', age: 28};
});

module.exports = router;