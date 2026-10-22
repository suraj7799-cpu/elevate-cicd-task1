
const http = require("http");

const PORT = process.env.PORT || 3000;

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Elevate Labs CI/CD</title></head>
        <body>
          <h1>Elevate Labs DevOps Internship</h1>
          <p>Node.js application is running successfully!</p>
          <p>Automated deployment with GitHub Actions and Docker.</p>
        </body>
      </html>
    `);
  });
}

if (require.main === module) {
  createServer().listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
  });
}

module.exports = { createServer };
