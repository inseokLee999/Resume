module.exports = {
    apps: [
      {
        name: 'portfolio-inseok',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 8000',
        instances: 1,
        exec_mode: 'cluster',
      },
    ],
  };