//Allow console calls since this is a build files
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // this assures hot reloading doesn't apply

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);
webpack(webpackConfig).run((err, status) => {
  if (err) { // fatal error occured, stop here
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = status.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ' .bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack status: ${status}`);

  //if we get here, build has succeeded
  console.log('Your app has been compiled in production mode and written to /dist. it\'s ready to roll!'.green);

  return 0;
});
