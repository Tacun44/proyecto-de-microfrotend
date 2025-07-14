const { merge } = require('webpack-merge');
const singleSpaDefaults = require('single-spa-angular/lib/webpack').default;
const path = require('path');

module.exports = (config, options) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'org', // puedes cambiar 'org' por el nombre de tu organización
    projectName: 'teste',
    webpackConfig: config,
    options,
  });

  return merge(defaultConfig, {
    // Puedes agregar aquí configuraciones personalizadas de webpack
    output: {
      uniqueName: 'teste',
      publicPath: '',
      path: path.resolve(__dirname, 'dist/teste'),
      filename: '[name].js',
      libraryTarget: 'system',
      resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
      },
    },
    externals: [
      /^@angular\/.*/, // para compartir dependencias entre microfrontends
      'single-spa',
    ],
  });
}; 