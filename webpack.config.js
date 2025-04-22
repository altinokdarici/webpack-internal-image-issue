export default {
  entry: {
    './index': './src/index.js',
  },
  mode: 'development',
  target: ['web', 'es2022'],
  output: {
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/inline',
      },
    ],
  }
};
