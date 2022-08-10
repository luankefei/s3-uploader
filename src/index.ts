import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router({ prefix: "/api/v1" });

router.get("/upload", (ctx) => {
  ctx.body = "ok";
});

app.use(router.routes());

app.listen(3000);
