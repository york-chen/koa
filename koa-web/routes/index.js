const router = require('koa-router')();
const http = require('../util/http');
router.get('/', async (ctx, next) => {
    let res = await http.get('/login', {params: {name: `york`, age: `20`}});
    await ctx.render('index', {
        title: `hello ${res.data.name}`
    })
});


router.get('/string', async (ctx, next) => {
    let res = await http.post('/login/signinaaa', {data: {name: `york`}});
    await ctx.render(`index`, {
        title: `hh,this is ${res.data.name}`
    })
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
});

module.exports = router;
