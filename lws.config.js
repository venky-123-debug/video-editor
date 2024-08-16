module.exports = {
  port: 5000,
  directory: "public",
  spa: "index.html",
  logFormat: "dev",
  rewrite: [
    {
      from: "/api/v2/(.*)",
      to: "https://test.swagger.print2block.in/$1",
    },
    {
      from: "/ipfs/(.*)",
      to: "https://test.view.print2block.in/ipfs/$1",
    },
    {
      from: "/api/sign/(.*)",
      to: "https://pdfsign.test.print2block.in/$1",
    },
  ],
}
