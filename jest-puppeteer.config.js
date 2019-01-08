module.exports = {
  server: {
    command: 'node utilities/webapp-server.js',
    port: 3030,
    launchTimeout: 10000
  },
  launch: {
    headless: false,
    executablePath: 'chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
};
