const Koa = require('koa');
const app = new Koa();
const path = require('path')
const route = require('koa-route')
const serve = require('koa-static')
const home   = serve(path.join(__dirname));
const indexHtml = ctx => {
  ctx.response.redirect('/docs/index.html')
  //ctx.response.body = 'Hello World';
};
app.use(home); 
app.use(route.get('/', indexHtml));
app.listen(3000);