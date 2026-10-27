function validateEnvironment() {
  if (!process.env.APP_ENV) {
    throw new Error("APP_ENV is required");
  }

  return `Application environment: ${process.env.APP_ENV}`;
}

module.exports = { validateEnvironment };