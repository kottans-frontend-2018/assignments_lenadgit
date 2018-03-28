module.exports = {
  entry: 
  main: {'js/file.js'},
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  }
};

module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};

