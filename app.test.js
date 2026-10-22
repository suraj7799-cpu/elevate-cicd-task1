
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { createServer } = require("./index");

test("web application returns the expected page", async (t) => {
  const server = createServer();

  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  t.after(() => {
    server.close();
  });

  const address = server.address();
  const response = await fetch(
    `http://127.0.0.1:${address.port}`
  );

  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Elevate Labs DevOps Internship/);
  assert.match(html, /running successfully/);
});
