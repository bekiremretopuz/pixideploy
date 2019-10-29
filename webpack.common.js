/*
`CheckerPlugin` is optional. Use it if you want async error reporting.
We need this plugin to detect a `--watch` mode. It may be removed later
after https://github.com/webpack/webpack/issues/3460 will be resolved.
*/
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
    entry: {
        index: './src/scripts/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            title: 'Deploy',
            template: 'src/html/index.html',
            hash: true,
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    externals: {
        'pixi.js': 'PIXI',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.scss', '.json', 'spec.ts'],
        modules: ['node_modules'],
        alias: {
            'styles': path.resolve(__dirname, 'src/styles/'),
            'lib': path.resolve(__dirname, 'lib/'),
            'app': path.resolve(__dirname, 'src/scripts/app/'), 
            'fpsmeter': path.resolve(__dirname, 'lib/darsain/fpsmeter/fpsmeter'),
            'screenfull': path.resolve(__dirname, 'lib/sindresorhus/screenfull/screenfull'), 
            'gsap': path.resolve(__dirname, 'lib/greensock/greensock-js'),
            'pixi-layers': path.resolve(__dirname, 'lib/pixijs/pixi-layers/pixi-layers'),
            'pixi-particles': path.resolve(__dirname, 'lib/pixijs/pixi-particles/pixi-particles'),
            'pixi-spine': path.resolve(__dirname, 'lib/pixijs/pixi-spine/pixi-spine'),
        },
        plugins: [
            new TsConfigPathsPlugin()
        ],
    },
    stats: 'verbose',
};