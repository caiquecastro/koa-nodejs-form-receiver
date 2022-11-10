import Koa from 'koa';
import { koaBody } from 'koa-body';

const app = new Koa();

app.use(koaBody());
app.use((ctx) => {
  ctx.body = ctx.request.body;
});

app.listen(process.env.PORT);