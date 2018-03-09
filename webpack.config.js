
module.exports = {
    mode: 'production',
    devtool: "souce-map",
    entry: {
        "later": "./src/later.js",
        "later-core": "./src/later-core.js"
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        library: "later",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    }
}