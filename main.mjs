import Koa from 'koa';
import { koaBody } from 'koa-body';

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(koaBody());
app.use((ctx) => {
  ctx.body = ctx.request.body;
});

app.listen(PORT);
