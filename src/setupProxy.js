const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1/completions",
    createProxyMiddleware({
      target: "https://api.openai.com",
      changeOrigin: true,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
  );
};
