const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    mode: 'development',
    output: {
        path: path.join(__dirname, "/dist"), // the bundle output path
        filename: "bundle.js", // the name of the bundle
      },
    resolve: {
        extensions: [".js", ".jsx", '.css', '.less'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(css|less)$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }
        ]
    },
    plugins: [htmlPlugin],
    devServer: {
        port: 3840,
        historyApiFallback: true
    },
};
