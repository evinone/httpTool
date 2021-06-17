const path = require('path');
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        app:path.join(__dirname,'./src/index.js')
    },
    output: {
        filename: "bundle.js",
        path:path.join(__dirname,'dist')
    },
    module: {
        rules: [{test: /\.js$/,use:['babel-loader'], exclude: path.join(__dirname,'node_modules')},{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.cm\.styl$/,
            loader:
              "style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader"
          }]
    },
    plugins:[
        new htmlPlugin({template: "public/index.html"})
    ]

}