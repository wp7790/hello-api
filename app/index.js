const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (_req, res) => res.json({ ok: true, service: "hello-api" }));
app.get("/healthz", (_req, res) => res.send("ok"));

app.listen(PORT, () => console.log(`hello-api listening on ${PORT}`));
