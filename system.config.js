System.config({
  map: {
    'main': 'main.js',
    'moment': 'node_modules/moment/moment.js',
  },
  packages: {
    'app': { main: 'app.js', defaultExtension: 'js' },
    // 'moment': { format: 'cjs' }
  }
});