import Koa from 'koa';
import { koaBody } from 'koa-body';
import cors from '@koa/cors';

export const app = new Koa();

app.use(koaBody({}));
app.use(cors());
app.use((ctx) => {
  const { body, method, headers } = ctx.request;
  console.log(body);
  ctx.body = {
    method,
    headers,
    body,
  };
});
