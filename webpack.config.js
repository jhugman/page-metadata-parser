module.exports = {
    entry: ['./parser.js'],
    externals: {
      url: 'window',
    },
    output: {
        path: './client',
        filename: 'page-metadata-parser.js',
        libraryTarget: 'var',
        library: 'metadataparser'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [
                /node_modules\/babel-/m,
                /node_modules\/core-js\//m,
                /node_modules\/regenerator-runtime\//m
            ]
        }]
    }
};

