module.exports = {
  apps: [
    {
      name: 'f1-frontend',
      script: 'npm',
      args: 'run dev',
      watch: false,
      env: {
        PORT: 4000,
        NODE_ENV: 'production'
      }
    },
    {
      name: 'f1-backend',
      cwd: './server',
      script: 'npm',
      args: 'start',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};
