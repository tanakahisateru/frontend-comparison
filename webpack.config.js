const path = require('path');
const {VueLoaderPlugin} = require("vue-loader");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

let config = {
    entry: {
        'bundle': [
            './assets/js/index.js',
            './assets/css/main.css'
        ],
        // 'extra': [
        //     './assets/js/extra.script.js'
        // ]
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/dist'),
        publicPath: "/assets/dist/",
        filename: '[name].js',
        clean: true
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".jsx", ".vue", ".json"]
    },
    plugins: [
        new WebpackManifestPlugin({
            fileName: "manifest.json",
            writeToFileEmit: true
        }),
        new VueLoaderPlugin()
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = '[name]-[contenthash].js';
        config.devtool = 'source-map';
    }
    return config;
};
