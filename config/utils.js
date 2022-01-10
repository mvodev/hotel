const portUsed = require('port-used');

async function getAvailabelPort() {
  for (let port = 3000; port < 65000; port += 1) {
    const isUsed = await portUsed.check(port, 'localhost');
    if (!isUsed) return port;
  }

  throw new Error('no available ports');
}

module.exports = {
  getAvailabelPort
};