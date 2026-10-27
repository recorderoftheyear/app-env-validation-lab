const test = require("node:test");
const assert = require("node:assert");
const { validateEnvironment } = require("./index");

test("validates the configured application environment", () => {
  assert.strictEqual(
    validateEnvironment(),
    `Application environment: ${process.env.APP_ENV}`
  );
});