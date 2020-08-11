const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const dev = process.env.NODE_ENV  != 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const router = new Router()
router.get('/test',(ctx)=>{
    ctx.body = '<p>hello router</p>'
})
app.prepare().then(()=>{
    const server = new Koa()
    server.use(async(ctx,next)=>{
        await handle(ctx.req,ctx.res)
        ctx.respond = false
    })
    server.use(async(ctx,next)=>{
        ctx.body = '<span>koa</span>'
        await next()
    })
    server.use(router.routes())
    server.listen(3000,()=>{
        console.log("koa server listening on 3000")
    })
})