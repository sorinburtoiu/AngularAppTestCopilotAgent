const { env } = require('process');

const target = env["services__angularapp1-server__https__0"] ?? 'https://localhost:7269';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
