const glob = require('glob');

module.exports = {
    entry: {
        index: glob.sync('./src/index.ts')
    },
    target: 'node',
    devtool: false,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        libraryTarget: 'this'
    }
};
