
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const NodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {

    mode: "development",
    target: "node",
    watch:true,
    externals: [NodeExternals()],
    output:{
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.gql$/ ,
                exclude: /node_modules/,
                loader: "graphql-tag/loader"
            }
        ]
    },
    resolve: {
        extensions:[".ts" , ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new NodemonPlugin()
    ]
}