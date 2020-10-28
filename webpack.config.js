const glob = require('glob');

module.exports = {
    entry: {
        index: glob.sync('./src/index.ts'),
        application: glob.sync('./src/application.ts'),
        download: glob.sync('./src/download.ts'),
        filesystem: glob.sync('./src/filesystem.ts'),
        package: glob.sync('./src/package.ts'),
        systeminfo: glob.sync('./src/systeminfo.ts'),
        tizen: glob.sync('./src/tizen.ts'),
        tvaudiocontrol: glob.sync('./src/tvaudiocontrol.ts'),
        tvdisplaycontrol: glob.sync('./src/tvdisplaycontrol.ts'),
        tvinfo: glob.sync('./src/tvinfo.ts'),
        tvinputdevice: glob.sync('./src/tvinputdevice.ts'),
        tvwindow: glob.sync('./src/tvwindow.ts'),
        websetting: glob.sync('./src/websetting.ts')
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
