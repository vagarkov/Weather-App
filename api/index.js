// Examples:
// GET /api/hello → GET https://example.org/hello
// POST /api/test?color=red → POST https://example.org/test?color=red
//
// Additionally, the proxy will:
// - Add an "x-added" header
// - Remove the "x-removed" header
// From the proxied response.
//
// You can/should update the proxy to suit your needs.
// See https://github.com/chimurai/http-proxy-middleware for more details.
const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: "https://api.weather.yandex.ru",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "" // strip "/api" from the URL
  },
});

// Expose the proxy on the "/api/*" endpoint.
export default function (req, res) {
  return apiProxy(req, res);
};