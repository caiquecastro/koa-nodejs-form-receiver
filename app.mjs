import Koa from 'koa';
import { koaBody } from 'koa-body';

export const app = new Koa();

app.use(koaBody({}));
app.use((ctx) => {
  const { body } = ctx.request;
  console.log(body);
  ctx.body = body;
});