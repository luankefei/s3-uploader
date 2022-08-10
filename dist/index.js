"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router({ prefix: "/api/v1" });
router.get("/upload", (ctx) => {
    ctx.body = "ok";
});
app.use(router.routes());
app.listen(3000);
//# sourceMappingURL=index.js.map