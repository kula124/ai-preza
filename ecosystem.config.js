module.exports = {
  apps: [{
    name: 'ai-preza',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 8888,
      NODE_ENV: 'production'
    }
  }]
}
